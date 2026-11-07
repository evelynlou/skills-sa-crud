import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import './GerenciarHabilidades.css';

function GerenciarHabilidades() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [nivel, setNivel] = useState('');

  const [habilidades, setHabilidades] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erroListagem, setErroListagem] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [salvando, setSalvando] = useState(false);

  // Guarda o ID da habilidade que está sendo editada
  const [idEditando, setIdEditando] = useState(null);

  // READ - Listar habilidades
  async function listarHabilidades() {
    setCarregando(true);
    setErroListagem('');

    try {
      const { data, error } = await supabase
        .from('habilidades')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        throw error;
      }

      setHabilidades(data || []);
    } catch (error) {
      console.error(error);
      setErroListagem(
        'Erro ao carregar habilidades: ' + error.message
      );
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    listarHabilidades();
  }, []);

  // Limpa o formulário
  function limparFormulario() {
    setNome('');
    setDescricao('');
    setCategoria('');
    setNivel('');
    setIdEditando(null);
  }

  // CREATE e UPDATE
  async function salvarHabilidade(event) {
    event.preventDefault();

    setSalvando(true);
    setMensagem('');

    const dados = {
      nome,
      descricao,
      categoria,
      nivel
    };

    try {
      let resultado;

      if (idEditando !== null) {
        // UPDATE - Editar uma habilidade existente
        resultado = await supabase
          .from('habilidades')
          .update(dados)
          .eq('id', idEditando)
          .select();
      } else {
        // CREATE - Cadastrar nova habilidade
        resultado = await supabase
          .from('habilidades')
          .insert([dados])
          .select();
      }

      if (resultado.error) {
        throw resultado.error;
      }

      if (!resultado.data || resultado.data.length === 0) {
        throw new Error(
          'Nenhum registro foi salvo. Verifique as permissões do banco.'
        );
      }

      const estavaEditando = idEditando !== null;

      limparFormulario();

      setMensagem(
        estavaEditando
          ? 'Habilidade atualizada com sucesso!'
          : 'Habilidade cadastrada com sucesso!'
      );

      await listarHabilidades();
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao salvar: ' + error.message);
    } finally {
      setSalvando(false);
    }
  }

  // Preenche o formulário para edição
  function editarHabilidade(habilidade) {
    setIdEditando(habilidade.id);
    setNome(habilidade.nome);
    setDescricao(habilidade.descricao);
    setCategoria(habilidade.categoria);
    setNivel(habilidade.nivel);
    setMensagem('');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function cancelarEdicao() {
    limparFormulario();
    setMensagem('');
  }

  // DELETE - Excluir uma habilidade
  async function excluirHabilidade(habilidade) {
    const confirmou = window.confirm(
      `Tem certeza que deseja excluir "${habilidade.nome}"?`
    );

    if (!confirmou) {
      return;
    }

    setSalvando(true);
    setMensagem('');

    try {
      const { data, error } = await supabase
        .from('habilidades')
        .delete()
        .eq('id', habilidade.id)
        .select();

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        throw new Error(
          'Nenhuma habilidade foi excluída. Verifique as permissões do banco.'
        );
      }

      // Se estava editando a habilidade excluída,
      // limpa o formulário.
      if (idEditando === habilidade.id) {
        limparFormulario();
      }

      setMensagem('Habilidade excluída com sucesso!');

      // Atualiza a lista depois da exclusão
      await listarHabilidades();
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao excluir: ' + error.message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <>
        <main className="habilidades-container">
        <h1>Gerenciador de Habilidades</h1>
        <p>Cadastre e organize suas habilidades no Skills SA.</p>

        <form
            className="habilidades-form"
            onSubmit={salvarHabilidade}
        >
            <h2>
            {idEditando !== null
                ? 'Editar habilidade'
                : 'Cadastrar nova habilidade'}
            </h2>

            <label htmlFor="nome">Nome da habilidade</label>
            <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: JavaScript"
            required
            />

            <label htmlFor="descricao">Descrição</label>
            <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva a habilidade"
            />

            <label htmlFor="categoria">Categoria</label>
            <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            >
            <option value="">Selecione uma categoria</option>
            <option value="Programação">Programação</option>
            <option value="Design">Design</option>
            <option value="Testing">Testing</option>
            <option value="Outros">Outros</option>
            </select>

            <label htmlFor="nivel">Nível</label>
            <select
            id="nivel"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            required
            >
            <option value="">Selecione um nível</option>
            <option value="Básico">Básico</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
            </select>

            <button type="submit" disabled={salvando}>
            {salvando
                ? 'Salvando...'
                : idEditando !== null
                ? 'Salvar alterações'
                : 'Cadastrar habilidade'}
            </button>

            {idEditando !== null && (
            <button
                type="button"
                className="botao-cancelar"
                onClick={cancelarEdicao}
                disabled={salvando}
            >
                Cancelar edição
            </button>
            )}
        </form>

        {mensagem && <p role="status">{mensagem}</p>}

        <section className="habilidades-lista">
            <h2>Habilidades cadastradas</h2>

            {carregando ? (
            <p>Carregando habilidades...</p>
            ) : erroListagem ? (
            <p role="alert">{erroListagem}</p>
            ) : habilidades.length === 0 ? (
            <p>Nenhuma habilidade cadastrada ainda.</p>
            ) : (
            <div className="habilidades-grid">
                {habilidades.map((habilidade) => (
                <article
                    className="habilidade-card"
                    key={habilidade.id}
                >
                    <h3>{habilidade.nome}</h3>

                    <p>{habilidade.descricao}</p>

                    <p>
                    <strong>Categoria:</strong>{' '}
                    {habilidade.categoria}
                    </p>

                    <p>
                    <strong>Nível:</strong>{' '}
                    {habilidade.nivel}
                    </p>

                    <div className="habilidade-acoes">
                    <button
                        type="button"
                        className="botao-editar"
                        onClick={() => editarHabilidade(habilidade)}
                        disabled={salvando}
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        className="botao-excluir"
                        onClick={() => excluirHabilidade(habilidade)}
                        disabled={salvando}
                    >
                        Excluir
                    </button>
                    </div>
                </article>
                ))}
            </div>
            )}

        </section>
        </main>

        <footer className="skills-footer">
        <p>
            <strong>Skills SA</strong> — Gerenciador de Habilidades
        </p>

        <p>
            Projeto acadêmico | UDESC — Universidade do Estado
            de Santa Catarina
        </p>

        <p>
            Desenvolvido por <strong>Evelyn</strong>
        </p>

        <p>
            <a
            href="https://github.com/evelynlou/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Meu GitHub
            </a>
        </p>

        <p>© 2026 Skills SA</p>
        </footer>
  </>
  );
}

export default GerenciarHabilidades;