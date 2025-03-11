import React from "react";
import buganda from "../assets/buganda.jpg";

const leaders = [
  { name: "Munaawa Dan", position: "Ssentebe", image: "Chairman.jpeg" },
  { name: "Nsubuga Najib", position: "Omumyuka", image: "Vice.jpeg" },
  { name: "Ndagire Christine", position: "Omuwanika", image: "treasurer.jpeg" },
  { name: "Gabriel C Buule", position: "Ow'Amawulire", image: "buule.jpg" },
  { name: "Mirro Shafik", position: "Muwandisi", image: "secretary.jpeg" },
  { name: "Kulumba Dickson", position: "Omukubiriza", image: "speaker.jpeg" },
  { name: "Ssentongo Micheal", position: "Owa Diaspora", image: "diaspora.jpg" },
  { name: "Twagala Ssekitooleko", position: "Pulojekiti n'Enkulakulana", image: "twagala.jpg" },
  { name: "Ssemakula Wycliffe", position: "Tekinologiya", image: "ict.jpeg" },
  { name: "Nalugwa Lilian", position: "Amyuka owa Tekinologiya", image: "ict2.jpeg" },
  { name: "Namukangula Keith", position: "Member", image: "keith.jpg" },
  { name: "Lunanika Sharif", position: "Embabulungi / Welfare", image: "welfare.jpeg" },
  { name: "Simon Ssenkayi", position: "Omuwabuzi", image: "advisor.jpeg" },
  { name: "Namulwana H Victoria", position: "Eby'obulambuzi n'Okwewumuzamu", image: "hospitality.jpeg" },
  { name: "Galiwango B Musota", position: "Member", image: "bemba.jpg" },
  { name: "Kalema Abubakar Kasumba", position: "Member", image: "kasumba.jpg" },
  { name: "Ssebunya Hamzah", position: "Member", image: "hamza.jpeg" },
];

const messages = [
  { title: "Chairman's Message - Munaawa Dan", content: "Omuganda agamba, Ekiswa bwe kikyusa amaaso nga naawe okyusa envubo... Obutonde bw'ensi n'obuvunaanyizibwa bugenda mu maanyi." },
  { title: "Treasurer's Message - Omumbejja Ndagire Christine", content: "Our financial goals for this annually focus on supporting the core activities of the association, including projects that will uplift the community." },
  { title: "Advisor's Message - Simon Ssenkayi", content: "Ba Jjajaffe baalugera nti, “Enswa bwekyusa amaaso, nga naawe envubo okyusa.” Ebiro bye tulimu bikyuse, naffe enkola eteekeddwa okukyuka. Abantu bangi bafunye obuzibu bungi; abalala batuuse ku mitawaana mingi, n’abamu basibiddwa mu makomera naye nga kitandikidde ku bigambo." },
];

const chairmanImage = require("../assets/mayiga.jpg");

const About = () => {
  return (
    <section
      className="bg-cover bg-center pt-32 pb-16 px-6 relative"
      style={{
        backgroundImage: `url(${buganda})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto relative">
        {/* Title Section */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          About Buganda Yiyo Buganda Yange
        </h1>
        

        {/* Background Section */}
        <div className="bg-gray-900 py-16 px-8 rounded-xl shadow-xl mb-16">
  <h2 className="text-4xl font-semibold text-white text-center mb-8">Entandikwa | Backgrounds</h2>

  <div className="max-w-3xl mx-auto space-y-6">
    <p className="text-lg text-gray-300 leading-relaxed">
      Buganda YIYO Buganda YANGE, ky’ekibiina ky'abantu ba Kabaka ekikolera ku mitimbagano okusaabulula obulimba bw'abalabe ba Buganda. 
      Ekitongole kino kirina ekitundu eky'enjawulo ekikola ku bantu ba Kabaka okusobola okulwana obutali bubi n'obulimba oba emikutu egy'okwagala.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed">
    Obuvunaanyizibwa bwava mu kiragiro Nnyinimu Ssaabasajja Kabaka, kye yawa bwe yali oyogerako mu lukuŋŋaana lwa Buganda Bumu North America Convention, olwaliwo nga 29 May 2021. Maasomoogi yalagira abantu ba Buganda naddala abavubuka okukozesa emitimbagano okusaabulula obulimba bw'abakozesa emitimbagano okunafuya Obwakabaka, nga batambuza amawulire ag'obulimba.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed">
    Olwokussa mu nkola ekiragiro kya Ssemunywa, Buganda YIYO Buganda YANGE yatandikibwawo mu Mukulukusabitungotungo 2022 ku mukutu gwa X/Twitter.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed">
    Nga olugero lwomuganda bwe lugamba nti " Enswa bwekyusa amaaso nga naawe okyusa envubo" naffe twalaba nga kye kiseera tuzimbe eggye lya Ssaabasajja Kabaka, ku mitimbagano kubanga twakizuula nga abalabe ba Buganda bakozesa nnyo emitimbagano okutyoboola Obwakabaka.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed">
    Na bwekityo, buli yenna ayagala okulwanirira Obwakabaka, wano we twegattira anti abaganda baalugera nti "Agali awamu ge galuma ennyama. Buganda YIYO Buganda YANGE tukkiriza nti olutalo olwokulwanirira Nnamulondo ku mulembe guno tusaanidde tululwane nga tuwuliziganya wakati mu buweereza buno.
    </p>
  </div>
</div>


        {/* Objectives Section with Image Backgrounds */}
        <div className="bg-gray-900 py-16 px-8 rounded-xl shadow-xl mb-16">
        
        <h2 className="text-4xl font-semibold text-white text-center mb-8">Emiramwa | Objectives</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              "Okumanyisa abantu ba Kabaka amawulire amatuufu okuva e mbuga n'enteekateeka za Gavumenti ya Ssaabasajja Kabaka.",
              "Abantu ba Kabaka bonna okumanya 'Ensonga Ssemasonga eza Buganda ettaano'(5) wamu n'okuzinnyonyoka olw'okuzisomesa abalala.",
              "Okusoma olulimi lwaffe Oluganda, Ebyobuwangwa, Ennono, Obulombolombo n'empisa zaffe.",
              "Okuwuliriza ebisoomooza abantu ba Buganda eyo gye bawangaalira",
              "Abantu ba Kabaka abakozesa emitimbagano okuwa ebirowoozo ku nteekateeka ezizza Buganda ku ntikko.",
              "Okunyweza OBUMU mu bantu ba Ssaabasajja Kabaka abali ku mitimbagano.",
              "Okukunga abantu ba Kabaka abakozesa emitimbagano okwenyigira obutereevu mu nteekateeka za gavumenti ya Kabaka ezigendererwa okuwagira ebyenfuna bya Buganda omuli OLUWALO, Kabaka Birthday Run, Masaza Cup n'enteekateeka endala."
            ].map((objective, idx) => (
              <div
                key={idx}
                className="bg-dark-white text-black rounded-lg shadow-md p-4"
                style={{
                  backgroundColor: "white",  
                  fontSize: "16px",           
                  height: "auto",               
                  maxHeight: "180px",           
                  overflow: "hidden",          
                }}
              >
                <h3 className="font-extrabold text-xl mb-2">{` ${idx + 1}`}</h3>
                <p>{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-black text-center mb-8">Abakulembeze | Meet Our Leadership</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg text-center overflow-hidden transition-all transform"
              >
                <div className="w-36 h-36 mx-auto bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={require(`../assets/${leader.image}`)}
                    alt={leader.name}
                    className="object-cover w-full h-full opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-gray-500 text-sm">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Messages from Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-left border-l-4 border-blue-500 transition-all transform"
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-4">{msg.title}</h3>
                <p className="text-gray-700 leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Katikkiro’s Message Section */}
        <section className="py-8 bg-gray-900 text-white text-center">
          <h2 className="text-5xl md:text-4xl font-extrabold mb-8">Obubaka bwa Katikkiro Charles Peter Mayiga </h2>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-700 rounded-xl shadow-xl">
          <img src={chairmanImage} alt="Chairman" className="w-[300px] h-[300px] object-cover shadow-2xl" />

            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
              Seeing young and old people taking interest in their roots; in their history; in their culture; in their heritage, fills me with hope"
              </p>

              <p className="text-3xl font-light leading-snug">
                "I believe we all envision a bright future for Buganda  a Kingdom in her rightful place, at the summit of social and economic wellbeing of the people, as they enjoy their entire range of freedoms, be they cultural, political, basic and/or inherent. We all it Okuzza Buganda ku Ntikko these days. To realize that vision, we must be strategic; we must be focused; we must be determined; we must be smart; we must plan.."
              </p>

              <p className="mt-6 text-2xl font-bold text-white">Charles Peter Mayiga</p>
              <p className="text-2xl font-bold text-white">Wangaale Ayi Ssaabasajja Kabaka.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
