import React from 'react'
const data = [
  {
    title: "Movies Now Showing in Aurangabad",
    links: ["Shaitaan", "Yodha", "Kung Fu Panda 4","Article 370","Bastar: The Naxal Story","Laapataa Ladies","Unn Sawali","Ole Aale","Trailers Screening Show","Danga"]
  },
  {
    title: "Upcoming Movies in Aurangabad",
    links: ["Haddhu Ledhuraa", "Arthur The King", "Swatantra Veer Savarkar","Rakshasa Tantra","Dilkush","Bigul","Kaliyugam Pattanamlo","What A Kismat","Jajabara 2.0","Thooth Kaasu"]
  },
  {
    title: "Movie Updates and Celebrities",
    links: ["Upcoming Movies", "Movies Now Showing", "Movie Celebrities"]
  },
  {
    title: "Movies Per Week",
    links: ["Movies Playing Today", "Movies Playing Tomorrow", "Movies Playing This Weekend"]
  },
  {
    title: "Movies By Genre",
    links: ["Drama Movies", "Comedy Movies", "Adventure Movies","Romantic Movies","Thriller Movies","Action Movies","Crime Movies","Adaptation Movies","Mythological Movies","Political Movies"]
  },
  {
    title: "Upcoming Movies By Genre",
    links: ["Movies in Drama", "Movies in Thriller", "Movies in Action","Movies in Comedy","Movies in Romantic","Movies in Crime","Movies in Horror","Movies in Adventure","Movies in Suspense","Movies in Historical"]
  },
  {
    title: "Movies By Language",
    links: ["Movies in Hindi", "Movies in Marathi", "Movies in Chattisgarhi","Movies in Khasi","Movies in Tulu","Movies in Portuguese","Movies in Japanese","Movies in Haryanavi","Movies in English","Movies in Assamese"]
  },
  {
    title: "Movies By Format",
    links: ["Movies in 2D", "Movies in 3D", "Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in 4DX 3D","Movies in MX4D 3D","Movies in Full Dome","Movies in IMAX 2D","Movies in 7D"]
  },
  {
    title: "Upcoming Movies By Format",
    links: ["Movies in 2D", "Movies in 3D", "Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in 4DX 3D","Movies in MX4D 3D","Movies in Full Dome","Movies in IMAX 2D","Movies in 7D"]
  },
  {
    title: "Movies in Top Cities",
    links: ["Movies in Mumbai", "Movies in Delhi-NCR", "Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movies in Kolkata","Movies in Kochi"]
  },
  {
    title: "Cinemas in Top Cities",
    links: ["Movies in Mumbai", "Movies in Delhi-NCR", "Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movies in Kolkata","Movies in Kochi"]
  },
  {
    title: "COUNTRIES",
    links: ["Indonesia", "Singapore", "UAE","Sri Lanka","West Indies",]
  },
  {
    title: "HELP",
    links: ["About Us", "Contact Us", "Current Opening","Press Release","Press Coverage","Sitemap","FAQs","Terms and Conditions","Privacy Policy"]
  },
]
export const MenuLinks = () => {
  return (
    <section className='a_bg_dark_medium pb-5'>
      <div className="container py-2">
        {data.map((value, index) => {
          return <div key={index} className='a_darklight my-2'>
            <h6 className='a_h13 fw-normal'>{value.title.toUpperCase()}</h6>
            <div className='a_darklight2 a_h11 fw-light a_span mt-4 mb-4'>
              {value.links.map((ele, index) => {
                return <span key={index} className={`${index !== 0 ? "border-start border-secondary px-2" : "pe-2"}`}>{ele}</span>
              })}
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
