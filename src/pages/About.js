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
  { name: "Nalugwa Lilina", position: "Amyuka owa Tekinologiya", image: "ict2.jpeg" },
  { name: "Namukangula Keith", position: "Member", image: "keith.jpg" },
  { name: "Lunanika Sharif", position: "Embabulungi / Welfare", image: "welfare.jpeg" },
  { name: "Simon Ssenkayi", position: "Omuwabuzi", image: "advisor.jpeg" },
  { name: "Namulwana H Victoria", position: "Eby'obulambuzi n'Okwewumuzamu", image: "hospitality.jpeg" },
  { name: "Galiwango B Musota", position: "Member", image: "bemba.jpg" },
  { name: "Kalema Abubakar Kasumba", position: "Member", image: "kasumba.jpg" },
  { name: "Ssebunya Hamzah", position: "Member", image: "hamza.jpeg" },
];

const messages = [
  { title: "Chairman's Message", content: "Omuganda agamba, Ekiswa bwe kikyusa amaaso nga naawe okyusa envubo... Obutonde bw'ensi n'obuvunaanyizibwa bugenda mu maanyi." },
  { title: "Treasurer's Message", content: "Our financial goals for this annually focus on supporting the core activities of the association, including projects that will uplift the community." },
  { title: "Advisor's Message", content: "It is an honor to guide and mentor the talented youth of Buganda as they work towards building a better future for our people." },
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
      Obuvunaanyizibwa bwava mu kiragiro Nnyinimu Ssaabasajja Kabaka, okufuna okusuubira okw'ekibiina ku bantu ba Kabaka abakozesa ekikula eky'okulwanyisa obulamu 
      n'obuvunaanyizibwa. Omutima gwo gw'Obuganda ogw'emikisa kiyingirire muno okuggyako okwekikozesa omugambo mu Buganda buli wiiki.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed">
      Okukolera ku bintu by'ekibiina n'obuvunaanyizibwa ku bantu ba Kabaka, ekikula ky’obuganda kyandibadde ky’obuvunaanyizibwa okuva ku kitongole
      kye tusobola okugezaako okuvunaanyizibwa. Ebikolwa by'omuggo gw'Obuganda birina okwegatta n’obuvunaanyizibwa bw’abantu okuzzaawo empisa ez’omukwano.
    </p>
  </div>
</div>


        {/* Objectives Section with Image Backgrounds */}
        <div className="bg-gray-900 py-16 px-8 rounded-xl shadow-xl mb-16">
        
        <h2 className="text-4xl font-semibold text-white text-center mb-8">Emiramwa | Objectives</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              "Okumanyisa abantu ba Kabaka amawulire amatuufu mu Buganda.",
              "Abantu ba Kabaka bonna okumanya Ensonga Ssemasonga ne Katikkiro.",
              "Okusoma olulimi lwaffe Oluganda okugatte era okusobola obukulembeze.",
              "Okuwuliriza ebisoomoza abantu ba Buganda mu lwatu.",
              "Okukunga abantu ba Kabaka mu mbirikiti yo Buganda.",
              "Okunyweza OBUMU n'obukadde kubakulu.",
              "Okukunga abantu ba Kabaka ku nsonga za Kitendewoozi."
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
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl">
            <img src={chairmanImage} alt="Chairman" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "Seeing young and old people taking interest in their roots, it’s inspiring. Together, we build the strength and power of our community..."
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
