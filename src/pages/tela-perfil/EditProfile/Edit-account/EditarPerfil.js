import React, { useEffect, useState } from 'react';
import './EditarPerfil.css'
import Swal from 'sweetalert2'
import { CiLogout } from 'react-icons/ci'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HomeNavbar from '../../../components/navbar/navbar';

// async function alertPasswordInput() {
//   let password = '';
//   while (!password) {
//     const { value: inputPassword } = await Swal.fire({
//       title: 'Para efetuar as mudanças nas informações da sua conta, confirme sua identidade.',
//       input: 'password',
//       inputLabel: 'Informe sua senha',
//       inputPlaceholder: 'Insira Sua Senha',
//     });
//     password = inputPassword;
//   }
//   return password;
// }

// async function alertSalvar() {

//   const password = await alertPasswordInput();

//   if (password) {
//     Swal.fire('Salvo!', 'Suas informações foram salvas com sucesso.', 'success')
//   }
// }


function EditarPerfil() {

  const navigate = useNavigate()

  /*save code from telaPerfil to get the user infos from the URL*/
  const [user, setUser] = useState([])
  const { username } = useParams()

  const config = {
    headers: {
      Authorization: sessionStorage.getItem('accessToken')
    }
  }

  const handleRequisition = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/findOne/${username}`, config)
      console.log(`response`)
      console.log(response)
      if (response.data.isMe) {
        setUser(response.data)
      } else {
        alert("Você não é o proprietário dessa conta para poder edita-lá")
        navigate(`/${response.data.username}`)
      }
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    handleRequisition()
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  const logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('accessToken')
    alert("Até mais!")
    navigate('/')
  }

  const deleteUser = () => {

    const accessToken = sessionStorage.getItem('accessToken');

    const config = {
      headers: {
        Authorization: `${accessToken}`
      },
    };

    axios.delete(`http://localhost:3000/user/delete/${user.username}`, config)
      .then(res => {
        console.log(res);
        alert("Usuário deletado com sucesso!\nstatus: " + res.status)
        navigate(`/`)
      })
      .catch(error => {
        alert(error.response.data.message + "\nstatus: " + error.response.status)
        console.error(error)
      });
  }

  function alertExclude() {
    Swal.fire({
      title: 'Aviso!',
      text: 'Você tem certeza que deseja excluir sua conta? você não poderá recuperá-la depois.',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: `Excluir`,
      confirmButtonColor: '#fc8200',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#0052E0',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // await alertPasswordInput();
        await deleteUser()

        // Swal.fire(
        //   'Excluído!',
        //   'Sua conta foi excluída com sucesso.',
        //   'success'
        // );
      }
    });
  }

  function alertPagInDev() {
    alert("Página em construção!");
  }

  return (
    <div className='divMommy'>

      <HomeNavbar />

      <h1>Óla, {user.name}</h1>

      <div class="centerP">

        <p>Altere e/ou exclua suas informações pessoais</p>

      </div>

      <div class="centerP2">

        <p> *Essa informação será compartilhada com seu público</p>

      </div>

      <form>
        <div className='centerN'>
          <label for="nome">Login:</label>
          <input type="text" id="login" />
        </div>

        <div className='centerE'>
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
        </div>

        <div className='centerS'>
          <label for="senha">Senha:</label>
          <input type="senha" id="senha" />
        </div>

        <div className='centerC'>
          <label for="contato">Contato:</label>
          <input type="link" id="link" />
        </div>


      </form>

      <div class="fundo">
      </div>

      <button class="butdelt" onClick={alertExclude}>Excluir Conta</button>
      <button class="button" type='reset'>Cancelar</button>
      <button class="buttonS" onClick={alertPagInDev}>Salvar</button>

      <div className='div-butsair'>
        <CiLogout style={{
          fontSize: 20,
          margin: 3
          // position:'absolute',
          // top: 207,
          // left: 1160
        }} />
        <button class="butsair" onClick={logout}>Sair</button>
      </div>


    </div>
  )

}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default EditarPerfil;
