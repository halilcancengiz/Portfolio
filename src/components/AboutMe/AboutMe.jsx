import React from "react";
import "./aboutMe.css";
import { useTheme } from "../../context/ThemeContext";

const AboutMe = () => {
  let { theme } = useTheme();
  return (
    <>
      <div
        className="py-5"
        id="aboutMeDark"
      >
        <div className="wow heading d-flex align-items-center justify-content-center  flex-column">
          <h3 className="text-white">ABOUT ME</h3>
          <div className="headingBorder bg-white"></div>
        </div>
        <div className="aboutMeContainer">
          <div className="row container mx-auto">
            <div
              id="questionImgContainerDark"
              className={
                "col-lg-5 d-flex align-items-center justify-content-center mx-auto" 
              }
            ></div>
            <article className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center flex-column mx-auto">
              <h2
                className="text-white"
                style={{ borderBottom: "1px solid black", padding: "10px" }}
              >
                My Software Adventure
              </h2>
              <p className="text-center pcss">
                Merhaba ismim Halil.2021'de Karabük Üniversitesi Mekatronik
                Mühendisliği bölümünden mezun oldum. Aslında bölümümü
                seviyordum. Fakat daha çok istediğim bir şey olduğuna karar
                verdim.O da yazılım geliştirici olmak. Mezun olmadan önce kendi
                çapımda yazılımla ilgileniyordum. Mezun olduktan sonra, boş
                zamanımın artmasıyla kendimi tamamen bu alana verdim. İlk
                başlarda, yani boş zamanımın tamamını bu alana vermeye
                başladığımda, kendime bir alan seçmem gerektiğini farkettim.
                Yazılım geniş bir alan sonuçta. Ne yapmak beni mutlu ediyordu.
                Öncelikle kendime bu soruyu sordum. Bir ürün ortaya koymak ve bu
                ürünü görsellerle güzelleştirmenin bana heyecan vereceğini
                düşündüm. Daha sonra bunun için hangi dilleri öğrenmem
                gerektiğini araştırdım. Karşıma javascript,html,css çıktı.
                Ufaktan youtube üzeriden eğitim videolarını izlemeye başladım.
                Yaptıklarım küçük de olsa çok hoşuma gidiyordu. Alıştırmalar
                yapmaya başladım. Alıştırma yaptıkça daha da geliştim. Ama hala
                kendimi bu işi profesyonel olarak yapmaya hazır hissetmiyordum.
                Daha sonra bootstrap ile karşılaştım. Artık çoğu kodu, daha az
                zaman harcayarak yapmaya başlamıştım. Bu da bana daha farklı
                tecrübeler edinmem için zaman kazandırdı. Çeşitli sitelerin
                klonlarını yapmaya başladım. Gördüğüm çoğu şeyi koda
                dökebiliyordum.
              </p>
            </article>
          </div>
          <div className="row container mx-auto">
            <article className="col-lg-6 col-md-8 d-flex align-items-center justify-content-center mx-auto">
              <p className="text-center pcss">
                Yapamadıklarım olduğu zaman, tek başıma ilerlediğim için
                motivasyon kaybı yaşamaya başladım. Gerçekten bir şeyi tek
                başına öğrenmek kadar sancılı bir süreç yok. Ee bu böyle mi
                gidecekti ? Tabii ki hayır. Bu tek kişilik öğrenme sürecini
                nasıl atlatabilirim diye araştırma yapmaya başladım. Bootcampler
                ile karşılaştım. Gördüğüm tüm bootcamplere başvurmaya başladım.
                Sonunda Patika.dev ve Kodluyoruz ekibiyle karşılaştım. Bootcamp
                sürecinde çeşitli arkadaşlar edindim. Artık tek başınaymış gibi
                hissetmiyordum.Takıldığımda birlikte çözüm aradığım arkadaşlarım
                oldu. Bu süreçte ReactJS ile tanıştım. ReactJS üzerinden
                ilerlemeye başladım. Daha sonra Tübisad ve TechCareer Frontend
                bootcamp'ine kabul aldım. Ve bu eğitimi de bu projeyi
                tamamlamamla son buluyor. Ben yeni başlayan arkadaşlara, haddime
                olmasa da bir tavsiye vermek istiyorum. Tek başınıza ilerleyen
                varsa bunu yapmasın. Takıldığınızda motivasyonunuz düşer ve pes
                etme noktasına gelebilirsiniz. Yardım istemekten çekinmeyin.
                İletişime geçmekten çekinmeyin. Ve pes etmeyin! Bana soru sormak
                isteyen arkadaşlar hiç çekinmeden soru sorabilir. Elimden
                geldiğince yardım ederim.
              </p>
            </article>
            <div
              id="questionImgContainer2"
              className="col-lg-5 d-flex align-items-center justify-content-center mx-auto"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
