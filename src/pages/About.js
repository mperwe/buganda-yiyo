import React from "react";
import bg from "../assets/bug15.jpg";


const leaders = [
  { name: "Munaawa Dan", position: "Ssentebe", image: "Chairman.jpeg" },
  { name: "Nsubuga Najib", position: "Omumyuka ", image: "Vice.jpeg" },
  { name: "Ndagire Christine", position: "Omuwanika", image: "treasurer.jpeg" },
  { name: "Gabriel C Buule", position: "Ow'Amawulire ", image: "buule.jpg" },
  { name: "Mirro Shafik", position: "Muwandisi", image: "secretary.jpeg" },
  { name: "Kulumba Dickson", position: "Omukubiriza", image: "speaker.jpeg" },
  { name: "Ssentongo Micheal", position: "Owa Diaspora ", image: "diaspora.jpg" },
  { name: "Twagala Ssekitooleko", position: "Pulojekiti n'Enkulakulana ", image: "twagala.jpg" },
  { name: "Ssemakula Wycliffe", position: "Tekinologiya", image: "ict.jpeg" },
  { name: "Nalugwa Lilina", position: "Amyuka owa Tekinologiya", image: "ict2.jpeg" },
  { name: "Namukangula Keith", position: "Member", image: "keith.jpg" },
  { name: "Lunanika Sharif", position: "Embabulungi / Welfare", image: "welfare.jpeg" },
  { name: "Simon Ssenkayi", position: "Omuwabuzi", image: "advisor.jpeg" },
  { name: "Namulwana H Victoria", position: "Eby'obulambuzi n'Okwewumuzamu ", image: "hospitality.jpeg" },
  { name: "Galiwango B Musota", position: "Member", image: "bemba.jpg" },
  { name: "Kalema Abubakar Kasumba", position: "Member", image: "kasumba.jpg" },  
  { name: "Ssebunya Hamzah ", position: "Member", image: "hamza.jpeg" },
];

const messages = [
  { title: "Chairman's Message", content: "Omuganda agamba, Ekiswa bwe kikyusa amaaso nga naawe okyusa envubo. Mukiseera kino, tusanidde ffena okukiriza enkyukakyuka eriwo mu mulembe gunno ey'okukozesa Tekinologiya. Mu mirembe egyayita bajjajjaffe bakozesanga Maffumu n'Engabo okukuuma n'okunyweza Ekitiibwa kya Nnamulondo.  Mukiseera kino amaanyi n'obumaliirivu bwaffe tusanidde okubulaga nga tukozesa Tekinologiya mungeri ejjayo Ekitiibwa kya Nnamulondo." },
  { title: "Treasurer's Message", content: "Our financial goals for this annually focus on supporting the core activities of the association, as well as funding new initiatives that will further enrich our Buganda community. We continue to prioritize efficient budgeting, while ensuring that we have sufficient reserves for any unforeseen circumstances." },
  { title: "Advisor's Message", content: "It is an honor to guide and mentor the talented youth of Buganda. Together, we will continue to build a legacy of leadership, education, and community development." },
];

const chairmanImage = require("../assets/mayiga.jpg");
const newKatikkiroImage = require("../assets/Robert.jpeg");

const About = () => {
  return (
    <section
      className="bg-cover bg-center pt-32 pb-16 px-6 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          About Buganda Yiyo Buganda Yange
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-white mb-12 text-center leading-relaxed">
        Buganda YIYO Buganda YANGE, ky’ekibiina ky'abantu ba Kabaka ekikolera ku mitimbagano okusaabulula obulimba bw'abalabe ba Buganda, mu kaweefube w'Okukuuma, Okunyweza n'Okutaasa Nnamulondo
        </p>

        {/* Background Section */}
        <div className="bg-white py-12 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Entandikwa | Background</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Obuvunaanyizibwa bwava mu kiragiro Nnyinimu Ssaabasajja Kabaka, kye yawa bwe yali oyogerako mu lukuŋŋaana lwa Buganda Bumu North America Convention, olwaliwo nga 29 May 2021.
            Maasomoogi yalagira abantu ba Buganda naddala abavubuka okukozesa emitimbagano okusaabulula obulimba bw'abakozesa emitimbagano okunafuya Obwakabaka, nga batambuza amawulire ag'obulimba.
            Olw’okussa mu nkola ekiragiro kya Ssemunywa, Buganda YIYO Buganda YANGE yatandikibwawo mu Mukulukusabitungotungo 2022 ku mukutu gwa X/Twitter.
            Nga olugero lw'Omuganda bwe lugamba nti "Ekiswa bwe kikyusa amaaso nga naawe okyusa envubo" naffe twalaba nga kye kiseera tuzimbe eggye lya Ssaabasajja Kabaka, ku mitimbagano
            kubanga twakizuula nga abalabe ba Buganda bakozesa nnyo emitimbagano okutyoboola Obwakabaka.
            Nabwekityo, buli yenna ayagala okulwanirira Obwakabaka, wano we twegattira anti abaganda baalugera nti "Agali awamu ge galuma ennyama".
          </p>
        </div>

                {/* Our Objectives Section */}
        <div className="bg-white py-12 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">Emiramwa | Objectives </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {["Okumanyisa abantu ba Kabaka amawulire amatuufu okuva e mbuga nenteekateeka za Gavumenti ya Ssaabasajja Kabaka.",
              "Abantu ba Kabaka bonna okumanya Ensonga Ssemasonga eza Buganda ettaano(5) wamu nokuzinnyonyoka olwokuzisomesa abalala",
              "Okusoma olulimi lwaffe Oluganda, Ebyobuwangwa, Ennono, Obulombolombo n'Empisa zaffe.",
              "Okuwuliriza ebisoomoza abantu ba Buganda eyo gye bawangaalira",
              "Abantu ba Kabaka abakozesa emitimbagano okuwa ebirowoozo ku nteekateeka ezizza Buganda ku ntikko.",
              "Okunyweza OBUMU mu bantu ba Ssaabasajja Kabaka abali ku mitimbagano.",
              "Okukunga abantu ba Kabaka abakozesa emitimbagano okwenyigira obutereevu mu nteekateeka za gavumenti ya Kabaka ezigendererwa okuwagira eby'enfuna bya Buganda omuli OLUWALO, Kabaka Birthday Run, Masaza Cup n'enteekateeka endala.",
             
            ].map((objective, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{` ${idx + 1}`}</h3>
                <p className="text-gray-600">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        
        
        {/* Leadership Section */}
        <div className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Abakulembeze | Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg text-center overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
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
                className="bg-white p-8 rounded-lg shadow-md text-left border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl"
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
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl">
            <img src={chairmanImage} alt="Chairman" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "Seeing young and old people taking interest in their roots; in their history; in their culture; in their heritage, fills me with hope
                I believe we all envision a bright future for Buganda – a Kingdom in her rightful place, at the summit of social and economic wellbeing of the people, as they enjoy their entire range of freedoms, be they cultural, political, basic and/or inherent. We all it Okuzza Buganda ku Ntikko these days. To realize that vision, we must be strategic; we must be focused; we must be determined; we must be smart; we must plan."
              </p>
              <p className="mt-6 text-2xl font-bold text-white">Charles Peter Mayiga</p>
              <p className="text-2xl font-bold text-white">Wangaale Ayi Ssaabasajja Kabaka. </p>
            </div>
          </div>
        </section>

        
      </div>
    </section>
  );
};

export default About;
