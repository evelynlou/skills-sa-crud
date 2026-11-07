import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ToogleBtn from "./component/filter/Toogle.btn";
import BtnDrop from "./component/buttonDropdown/btn-drop";
import ComponentPerson from "./component-person/component-person.js";
import ComponentProject from "./component/component-project.js";
import { AiOutlineCloseCircle } from "react-icons/ai";
import HomeNavbar from "../components/navbar/navbar";
import './telaMatch.css'

const TelaMatch = () => {
  const [isSearchingProject, setIsSearchingProject] = useState(true);
  const [filterPayload, setFilterPayload] = useState([]);
  const [filterPayloadSend, setFilterPayloadSend] = useState([]);
  const [workTypeDisable, setWorkTypeDisable] = useState(false);
  const [statusUserDisable, setStatusUserDisable] = useState(false);
  const [stateDisable, setStateDisable] = useState(false);
  const [filterProjectList, setFilterProjectList] = useState([]);
  const [filterPersonList, setFilterPersonList] = useState([]);

  const handleSearching = (state) => {
    setIsSearchingProject(state);
    setFilterPayload([]);
  };

  const actingAreaList = [
    "Ciencias_Exatas_e_da_Terra",
    "Ciencias_Biologicas",
    "Engenharia_ou_Tecnologia",
    "Ciencias_da_Saude",
    "Ciencias_Agrarias",
    "Ciencias_Sociais",
    "Ciencias_Humanas",
    "Linguistica",
    "Letras_e_Artes",
  ];

  const workTypeList = ["Híbrido", "Remoto", "Presencial"];

  const softSkillsList = [
    "Comunicacao_eficaz",
    "Trabalho_em_equipe",
    "Resolucao_de_problemas",
    "Adaptabilidade",
    "Criatividade",
    "Pensamento_critico",
    "Empatia",
    "Inteligencia_emocional",
    "Habilidades_de_negociacao",
    "Habilidades_de_lideranca",
    "Gestao_de_tempo",
    "Resiliencia",
    "Capacidade_de_ouvir",
    "Tomada_de_decisao",
    "Colaboracao",
    "Comunicacao_interpessoal",
    "Autoconsciencia",
    "Foco_no_cliente",
    "Orientacao_para_resultados",
    "Habilidades_de_apresentacao",
    "Adaptacao_a_mudancas",
    "Pensamento_analitico",
    "Inovacao",
    "Paciencia",
    "Pensamento_aberto",
    "Relacionamento_interpessoal",
    "Autoconfianca",
    "Habilidade_de_feedback",
    "Autocontrole",
    "Respeito",
    "Persuasao",
    "Habilidade_de_motivacao",
    "Gerenciamento_de_conflitos",
    "Organizacao",
    "Habilidade_de_delegacao",
    "Habilidade_de_ensino",
    "Tolerancia",
    "Comunicacao_clara",
    "Etica_profissional",
    "Atitude_positiva",
    "Habilidade_de_mentoria",
    "Iniciativa",
    "Gerenciamento_de_stress",
    "Adaptacao_a_culturas_diversas",
    "Habilidade_de_gerenciamento_de_projeto",
    "Colaboracao_global",
    "Habilidade_de_feedback_positivo",
    "Pensamento_estrategico",
    "Sensibilidade_cultural",
    "Trabalho_independente",
    "Pensamento_sistematico",
    "Habilidade_de_gerenciamento_de_equipe",
    "Solucao_de_conflitos",
    "Persistencia",
    "Habilidade_de_coaching",
    "Habilidade_de_gerenciamento_de_conflitos",
    "Empatia_emocional",
    "Habilidade_de_escuta_ativa",
    "Habilidade_de_comunicacao_em_grupo",
    "Gerenciamento_de_expectativas",
    "Comunicacao_visual",
    "Habilidade_de_construcao_de_relacionamento",
    "Habilidade_de_colaboracao",
    "Orientacao_para_detalhes",
    "Habilidade_de_construcao_de_equipe",
    "Adaptacao_a_ambientes_multiculturais",
    "Comunicacao_escrita",
    "Habilidade_de_resolucao_de_conflitos",
    "Autoavaliacao",
    "Habilidade_de_resolucao_de_problemas_complexos",
    "Comunicacao_verbal",
    "Gerenciamento_de_recursos",
    "Habilidade_de_pensamento_criativo",
    "Habilidade_de_organizacao",
    "Habilidade_de_lideranca_servidora",
    "Habilidade_de_definicao_de_metas",
    "Habilidade_de_comunicacao_interna",
    "Habilidade_de_aprendizado_rapido",
    "Foco_na_qualidade",
    "Habilidade_de_comunicacao_escrita",
    "Habilidade_de_relacionamento_interdepartamental",
    "Adaptacao_a_ambientes_de_alto_estresse",
    "Habilidade_de_gerenciamento_de_tempo",
    "Gerenciamento_de_relacionamento",
    "Habilidade_de_gerenciamento_de_recursos_humanos",
    "Adaptacao_a_mudancas_rapidas",
    "Habilidade_de_tomada_de_decisao_ponderada",
    "Habilidade_de_concentracao",
    "Foco_na_resolucao_de_problemas",
    "Habilidade_de_persuasao",
    "Habilidade_de_gerenciamento_de_processos",
    "Habilidade_de_cooperacao",
    "Habilidade_de_trabalho_em_grupo",
    "Adaptacao_a_culturas_corporativas",
    "Habilidade_de_comunicacao_diplomatica",
    "Habilidade_de_gerenciamento_de_prazos",
    "Habilidade_de_administracao_de_conflitos",
    "Gerenciamento_de_inovacao",
    "Habilidade_de_lidar_com_a_ambiguidade",
    "Habilidade_de_gerenciamento_de_desempenho",
  ];

  const statusUserList = [
    "Disponivel",
    "Sketch",
    "Ausente",
    "Offline",
    "Disponibilidade_Limitada",
    "Em_Reuniao",
    "Indisponivel",
    "Em_Pausa",
  ];

  const statesList = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const hardSkillsList = [
    "Programacao_de_computadores",
    "Design_grafico",
    "Desenvolvimento_web",
    "Analise_de_dados",
    "Marketing_digital",
    "Contabilidade",
    "Engenharia_mecanica",
    "Gerenciamento_de_projetos",
    "Redes_de_computadores",
    "Desenvolvimento_de_aplicativos_moveis",
    "Modelagem_3D",
    "Mecanica_automotiva",
    "Gerenciamento_de_estoque",
    "Producao_de_videos",
    "Design_de_circuitos_eletronicos",
    "Redacao_tecnica",
    "Traducao",
    "Design_de_interface_de_usuario",
    "Design_de_experiencia_do_usuario",
    "Analise_financeira",
    "Programacao_em_Python",
    "Programacao_em_Java",
    "Programacao_em_CPP",
    "Programacao_em_JavaScript",
    "Programacao_em_Ruby",
    "Programacao_em_PHP",
    "Programacao_em_Swift",
    "Programacao_em_Kotlin",
    "Programacao_em_CSHARP",
    "Programacao_em_SQL",
    "Programacao_em_R",
    "Programacao_em_MATLAB",
    "Programacao_em_HTML_CSS",
    "Programacao_em_TypeScript",
    "Programacao_em_Go",
    "Programacao_em_Rust",
    "Programacao_em_Scala",
    "Programacao_em_Perl",
    "Analise_de_dados_com_Excel",
    "Analise_de_dados_com_R",
    "Analise_de_dados_com_Python",
    "Analise_de_dados_com_SQL",
    "Aprendizado_de_Maquina",
    "Aprendizado_Profundo",
    "Redes_Neurais",
    "Visao_Computacional",
    "Processamento_de_Linguagem_Natural",
    "Blockchain",
    "Ciberseguranca",
    "Administracao_de_Bancos_de_Dados",
    "Computacao_em_Nuvem",
    "Administracao_de_Sistemas_Linux",
    "Administracao_de_Sistemas_Windows",
    "Reparacao_de_Computadores",
    "Midias_Sociais",
    "Publicidade_Online",
    "SEO",
    "SEA",
    "Contabilidade_Financeira",
    "Contabilidade_de_Gestao",
    "Auditoria",
    "Impostos",
    "Direito_Empresarial",
    "Desenho_Tecnico",
    "CAD",
    "CAE",
    "Robotica",
    "Automacao_Industrial",
    "Eletronica_de_Potencia",
    "Gerenciamento_da_Cadeia_de_Suprimentos",
    "Logistica",
    "Gerenciamento_do_Tempo",
    "Gerenciamento_do_Estresse",
    "Lideranca",
    "Negociacao",
    "Resolucao_de_Conflitos",
    "Tomada_de_Decisao",
    "Comunicacao_Interpessoal",
    "Criatividade",
    "Pensamento_Critico",
    "Analise_SWOT",
    "Metodologias_Ageis",
    "Gerenciamento_de_Riscos",
    "Analise_de_Mercado",
    "Design_de_Produtos",
    "Gestao_da_Qualidade",
    "Eletricidade",
    "Soldagem",
    "Marcenaria",
    "Encanamento",
    "Alvenaria",
    "Mecanica_de_Precisao",
    "Edicao_de_Video",
    "Edicao_de_Audio",
    "Fotografia",
    "Analise_Quimica",
    "Biologia_Molecular",
    "Microscopia_Eletronica",
    "Energias_Renovaveis",
    "Agricultura_Sustentavel",
  ];

  function addItemFilter(value, itemType) {
    const payload = { type: itemType, value };
    setFilterPayload([...filterPayload, payload]);
    toogleItem(itemType, true);
  }

  const toogleItem = (itemType, value) => {
    switch (itemType) {
      case "workType":
        setWorkTypeDisable(value);
        break;
      case "status":
        setStatusUserDisable(value);
        break;
      case "state":
        setStateDisable(value);
        break;
      default:
        break;
    }
  };

  function handleClearFilterItem(value, filterType) {
    toogleItem(filterType, false);
    const newFilterPayload = filterPayload.filter((item) => {
      return item.type !== filterType && item.value !== value;
    });
    setFilterPayload(newFilterPayload);
  }

  useEffect(() => {
    const getFilterProject = () => [
      {
        btnText: "Área de atuação",
        itensList: actingAreaList,
        itemType: "studyArea",
      },
      {
        btnText: "Modalidade",
        itensList: workTypeList,
        itemType: "workType",
        disableCondition: workTypeDisable,
      },
    ];
    setFilterProjectList(getFilterProject());
  }, [workTypeDisable]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const getFilterPerson = () => [
      {
        btnText: "Área de atuação",
        itensList: actingAreaList,
        itemType: "studyArea",
      },
      {
        btnText: "Status de disponibilidade",
        itensList: statusUserList,
        itemType: "status",
        disableCondition: statusUserDisable,
      },
      {
        btnText: "Soft skills",
        itensList: softSkillsList,
        itemType: "softSkills",
      },
      {
        btnText: "Hard skills",
        itensList: hardSkillsList,
        itemType: "hardSkills",
      },
      {
        btnText: "UF",
        itensList: statesList,
        itemType: "state",
        disableCondition: stateDisable,
      },
    ];
    setFilterPersonList(getFilterPerson());
  }, [stateDisable, statusUserDisable]) // eslint-disable-line react-hooks/exhaustive-deps

  const sendFilter = () => {
    setFilterPayloadSend(filterPayload);
  }

  return (
    <div className="telaMatch">
      <HomeNavbar />
      <Main>
        <Filter>
          <ToogleBtn toFilter={handleSearching} />
          {isSearchingProject
            ? filterProjectList.map((e) => (
              <BtnDrop
                onItemSelect={addItemFilter}
                btnText={e.btnText}
                itensList={e.itensList}
                itemType={e.itemType}
                disableCondition={e?.disableCondition || false}
              />
            ))
            : filterPersonList.map((e) => (
              <BtnDrop
                onItemSelect={addItemFilter}
                btnText={e.btnText}
                itensList={e.itensList}
                itemType={e.itemType}
                disableCondition={e?.disableCondition || false}
              />
            ))}
          <Button type="button" className="btn-filter" onClick={sendFilter}>
            {" "}
            Filtrar{" "}
          </Button>
        </Filter>

        <FiltersFlagsContainer>
          {filterPayload.map((e, index) => (
            <FiltersFlags type="button" className="btn-filter" key={index}>
              <FiltersFlagsClose
                onClick={() => {
                  handleClearFilterItem(e.value, e.type);
                }}
              >
                {" "}
                <AiOutlineCloseCircle />{" "}
              </FiltersFlagsClose>
              {e.value}
            </FiltersFlags>
          ))}
        </FiltersFlagsContainer>

        {isSearchingProject ? <ComponentProject filterPayload={filterPayloadSend} /> : <ComponentPerson filterPayload={filterPayloadSend} />}
      </Main>
    </div>
  );
};

const Main = styled.main`
  padding: 50px;
  padding-top: 20px;
    
  .card-applications { 
		display: flex;
		justify-content: center;
		margin-top: 20px;
    }
	}
`;

const Filter = styled.div`
  display: flex;
  justify-content: flex-start;

  .btn-filter {
    background-color: blue;
    color: white;
  }
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 5px 9px -5px black;
  cursor: pointer;
  height: 30px;
  margin: 0 10px;
  min-width: 100px;
  padding: 0 5px;
`;

const FiltersFlagsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;

const FiltersFlags = styled.button`
  background-color: #ffa647;
  border: none;
  border-radius: 10px;
  color: black;
  padding: 7px 15px;
  position: relative;
  margin: 0 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff8200;
    color: black;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const FiltersFlagsClose = styled.span`
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
`;

export default TelaMatch;
