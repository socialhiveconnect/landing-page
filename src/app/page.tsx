"use client";
import Colmeia from '@/components/Colmeia';
import CustomCard from '@/components/CustomCard';
import Navbar from '@/components/Navbar';

import imagem_estudante from '@/../public/estudante_ti.png';
import imagem_inicio_de_carreira from '@/../public/inicio_de_carreira.png';
import imagem_experiente from '@/../public/experiente.png';
import imagem_entusiastas from '@/../public/entusiastas.png';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="absolute top-60 left-20 -translate-x-1/2 -translate-y-1/2 z-0">
        <Colmeia treeLevels={[6, 5, 4, 3]} />
      </div>
      <section className="relative container mx-auto px-8 pt-10 text-center h-[60vh] flex flex-col justify-center items-center">
        <h2
          id="subtitle"
          className="relative z-10 text-4xl font-semibold mb-6 text-gray-100 drop-shadow-2xl text-outline sm:mt-16 sm:text-3xl"
        >
          Uma comunidade de todos para todos
        </h2>
        <h1
          id="title"
          className="relative z-10 text-7xl font-black text-white drop-shadow-2xl text-outline sm:text-5xl sm:mb-8"
        >
          Hive Connect
        </h1>
        <button
          className="relative z-10 mt-6 px-6 py-3 bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfha_R-8Q9ultiFG2WI3ZoqZtEa-J7e0XpUaR_MZMYZGANW1w/viewform', '_blank')}
        >
          Faça parte de nossa comunidade
        </button>
      </section>
      <section
        id="quem-somos"
        className="relative bg-white mx-auto px-8 py-10 scroll-mt-20"
      >
        <h2 className=" text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          visão geral
        </h2>
        <p className=" text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          Somos uma comunidade onde pessoas de diversas áreas da tecnologia e em
          diversos momentos de carreira para que possam se conectar, conversar
          e trocar conhecimentos. Queremos ajudar as pessoas a se encontrarem
          dentro de uma profissão de TI, ou até mesmo mudar de área dentro de
          tecnologia, ou ajudar o próximo repassando seu conhecimento.
        </p>
        <h2 className=" text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          qual o problema?
        </h2>
        <p className=" text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          Atualmente a cidade de Curitiba se mostra um tanto carente quando o
          assunto é comunidade e eventos de tecnologia. Percebemos essa
          necessidade tanto entre os profissionais do mercado de TI, quanto
          entre aqueles que desejam ingressar na área. Hoje as oportunidades
          para networking se limitam, na maioria das vezes ao LinkedIn, que
          embora seja uma ferramenta essencial, é marcada por uma formalidade
          que dificulta a formação de amizades e um networking mais natural e
          descontraído.
        </p>
        <h2 className="text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          o que é uma comunidade?
        </h2>
        <p className=" text-gray-900 text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          <span>
            Um espaço de convergência onde indivíduos buscam compartilhar e
            enriquecer conhecimentos;
          </span>
          <br />
          <span>
            Um ambiente seguro para o estabelecimento de conexões profissionais,
            cultivo de novas amizades e oportunidades de mentoria;
          </span>
          <br />
          <span>
            Uma rede colaborativa onde profissionais e iniciantes se unem para
            impulsionar o crescimento mútuo e o aprendizado contínuo;
          </span>
        </p>
      </section>
      <section
        id="publico-alvo"
        className="relative bg-opacity-80 bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 mx-auto px-8 py-10 scroll-mt-20 xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl"
      >
        <h2 className="text-white text-5xl text-center py-4 uppercase font-bold mb-5 sm:text-3xl">
          público-alvo
        </h2>
        <div className='flex flex-1 flex-wrap justify-around gap-10'>
          <CustomCard image={imagem_estudante} title='Estudantes de TI' />
          <CustomCard image={imagem_inicio_de_carreira} title='Profissionais em início de carreira' />
          <CustomCard image={imagem_experiente} title='Profissionais experientes' />
          <CustomCard image={imagem_entusiastas} title='Entusiastas de tecnologia' />
        </div>
      </section>
      <section
        id="trilha-de-carreiras"
        className="relative mx-auto px-8 py-10 scroll-mt-20 xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl"
      >
        <h2 className="text-white text-5xl text-center py-4 uppercase font-bold mb-5 sm:text-3xl">
          trilha de carreiras
        </h2>
        <p className=" text-white text-4xl text-center xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl">
          Em nosso GitHub, faremos trilhas de
          carreira. Cada carreira terá uma página.
          Nessa página, haverá as carreiras dentro
          das áreas (exemplo: DADOS - Analista de
          Dados, Data Engineer, etc.). Cada uma terá
          o perfil necessário para o profissional, seu
          roadmap e uma sequência de cursos para
          que ele se torne um bom profissional,
          seguindo esse roadmap e o cronograma
          que vamos montar.
        </p>
      </section>
      <section
        id="trabalho-voluntario"
        className="relative bg-white mx-auto px-8 py-10 scroll-mt-20 xl:px-60 lg:px-32 md:px-12 sm:px-4 pb-8 sm:text-2xl"
      >
        <h2 className=" text-5xl text-center py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
          trabalho voluntário
        </h2>
        <div className="flex flex-wrap flex-col sm:flex-row gap-[2%]">
          <div className="xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[100%]">
            <p className="text-4xl text-left py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
              fundadores:
            </p>
            <span className="text-4xl text-left sm:text-2xl text-gray-950">
              Criadores do projetos que também administram conteúdos, redes sociais e o Discord.
            </span>
            <p className="text-4xl text-left py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
              Moderadores:
            </p>
            <span className="text-4xl text-left sm:text-2xl text-gray-950">
              Membros ativos que ajudam a manter o ambiente seguro e ajudam a fomentar conversas entre membros.
            </span>
            <p className="text-4xl text-left py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
              Mentores:
            </p>
            <span className="text-4xl text-left sm:text-2xl text-gray-950">
              Voluntários que orientam iniciantes e migrantes de carreira na área de tecnologia.
            </span>
          </div>
          <div className="xl:w-[49%] lg:w-[49%] md:w-[49%] sm:w-[100%]">
            <p className="text-4xl text-left py-4 uppercase font-bold bg-gradient-to-r from-customColors-color4 via-customColors-color5 to-customColors-color6 text-transparent bg-clip-text sm:text-3xl">
              transformando a comunidade juntos
            </p>
            <span className="text-4xl text-left sm:text-2xl text-gray-950">
              Acreditamos que uma comunidade forte e acolhedora é construída com a colaboração de todos. Os fundadores se dedicam a manter conteúdos de qualidade e supervisionar o Discord e as redes sociais, enquanto membros engajados através de um sistema de pontuação podem tornar-se moderadores e ajudar a criar um ambiente seguro e harmonioso. Também incentivamos voluntários que desejem ser mentores, apoiando quem está iniciando ou migrando de carreira. Com cada contribuição, construímos juntos um ecossistema de apoio, aprendizado e inspiração.
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}