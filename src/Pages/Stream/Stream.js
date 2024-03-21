import React from 'react'
import "./Stream.css"
import { Carousel } from 'react-responsive-carousel'
import { PromotedBanner } from './PromotedBanner'

const streamData = [
  {
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    language: "English",
    slug: "1h 32m • Adventure, Animation, Comedy • U",
    movieName: "Kung Fu Panda",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00001563-dsqtbnheks-portrait.jpg",
    path: "url(Image/SteamsBanner/et00001563-flwjdhzdjp-horizontal_poster_still.jpg)"
  },
  {
    description: "Now that Chris and his girlfriend, Rose have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway in her parent`s home upstate. At first, Chris reads the family`s overly accommodating behavior as nervous attempts to deal with their daughter`s interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he could have never imagined.",
    language: "English",
    slug: "1h 44m • Drama, Horror, Thriller • A",
    movieName: "Get Out",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00047349-dxwfdnknfb-portrait.jpg",
    path: "url(Image/SteamsBanner/et00047349-nwyvywvcsq-horizontal_poster_still.jpg)",
  },
  {
    description: "Feature adaptation of Frank Herbert`s science fiction novel, Dune revolves around Paul Atreides, who leads nomadic tribes in a battle to control the desert planet Arrakis.",
    language: "English",
    slug: "2h 35m • Action, Adventure, Drama, Sci-Fi • UA",
    movieName: "Dune",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00122526-lntlczevkx-portrait.jpg",
    path: "url(Image/SteamsBanner/et00122526-eqnsuankcp-horizontal_poster_still.jpg)"
  },
  {
    description: "Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?",
    language: "Hindi",
    slug: "2h 8m • Crime, Mystery, Thriller • UA",
    movieName: "Aazam",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00343041-lasrumkllk-portrait.jpg",
    path: "url(Image/SteamsBanner/et00343041-nkkkxczqvw-horizontal_poster_still.jpg)"
  },
  {
    description: "Bookmyshow Stream Runtime: 3h 3 mins The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
    language: "English",
    slug: "3h 10m • Biography, Drama, Historical • UA",
    movieName: "Oppenheimer",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00347867-lvtgffmarq-portrait.jpg",
    path: "url(Image/SteamsBanner/et00347867-xrnfkldssf-horizontal_poster_still.jpg)"
  },
  {
    description: "In a violence-ridden neighborhood, fate puts a witty and ambitious young man in the crosshairs with a powerful gangster. Will he succumb to violence or find other ways to fight back?",
    language: "Tamil",
    slug: "2h 30m • Action, Drama, Thriller • UA",
    movieName: "Dinosaurs",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00364702-tlsqujrcbw-portrait.jpg",
    path: "url(Image/SteamsBanner/et00364702-ybptnlvgtb-horizontal_poster_still.jpg)"
  },
  {
    description: "Bea (Sydney Sweeney) and Ben (Glen Powell) look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold - until they find themselves unexpectedly thrust together at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    language: "Tamil",
    slug: "1h 44m • Comedy, Romantic • A",
    movieName: "Anyone But You",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00373727-ccxjkexzdr-portrait.jpg",
    path: "url(Image/SteamsBanner/et00373727-jsusbckadc-horizontal_poster_still.jpg)"
  },
  {
    description: "After his dog is killed in Skid Row, Jake Rosser plummets deep into a sinister underworld to uncover the truth about who may be responsible.",
    language: "Tamil",
    slug: "1h 40m • Drama • 18+",
    movieName: "Muzzle",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00390843-nshccdhaga-portrait.jpg",
    path: "url(Image/SteamsBanner/et00390843-fvrytzyeeu-horizontal_poster_still.jpg)"
  },
  {
    description: "Based on true events, Dragon: The Bruce Lee Story is the incredible journey of the life, love and unconquerable spirit of the martial arts legend.",
    language: "Tamil",
    slug: "2h 0m • Drama • A",
    movieName: "Dragon: Bruce Lee Story",
    title: "Brand new releases every Friday",
    imgcardpath: "Image/SteamsBanner/et00390993-qfsagjmmgm-portrait.jpg",
    path: "url(Image/SteamsBanner/et00390993-xxfpxvhjms-horizontal_poster_still.jpg)"
  },
]
export const Stream = () => {
  return (
    <section className='a_promoted_banner '>
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} className="h-100">
        {streamData.map((value, index) => {
          return <PromotedBanner key={index} description={value.description} language={value.language} slug={value.slug} movieName={value.movieName} title={value.title} isPremiere imgcardpath={value.imgcardpath} path={value.path} />
        })}
      </Carousel>
    </section>
  )
}
