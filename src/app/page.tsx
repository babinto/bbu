'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { ContactSection } from '@/components/ContactSection';
import Image from 'next/image';

const workItems = [
  '100 Foot Wave', '1001 Gece Masalları', '13 Reasons Why', '1911', '20 Dakika', '21 Bridges', '3 Ninjas', '32 Brinkburn Street', 'A Passage To India', 'A Teacher', 'Abduction', 'About My Father', 'Absolute Beginners', 'Ada Masalı', 'Adventure Time Distant Lands', "Africa's Geniuses", "Africa's Wildest", 'Afili Aşk', 'Agent Binky', 'Ağlama Anne', 'Ah Nerede', 'Aile', 'Air Crash Investigation', 'Air Gear', 'AJ and the Queen', 'Alaskan Women Looking For Love', 'Alev Alev', 'Alias Grace', 'Alien Worlds', 'Alper Rende ile Kaçış', 'Alter', 'Amarres', 'American Ganster', 'Anka', 'Annenin Sırrıdır Çocuk', 'Annie Hall', 'Another Miss Oh', 'Army of Darkness', 'Army of One', 'Aşk Ağlatır', 'Aşk Mantık İntikam', 'Aşk Tadilatı', 'Aşk ve Ceza', 'Aşk ve Mavi', 'Astral', 'Awake', 'Ayak Tenisi', 'Ayazın Sonu Güneş', 'Babam', 'Baby Boom', 'Babylon Berlin', 'Back To School', 'Backtrace', 'Bakugan', 'Bakugan: Armored Alliance', 'Bakugan: Evolutions', 'Bakugan: Geogan Rising', 'Bakugan: Legends', 'Bananas', 'Baraj', "Barney's World", 'Battlestar Galactica', 'Bear Grylls Ultimate Survival', 'Beast', 'Beauty Shop', 'Before I wake', 'Behind Enemy Lines', 'Behzat Ç.', 'Ben 10', 'Betonrausch', 'Big Hurt', "Bill Bailey's Jungle Hero", 'Billion', 'Bio-Dome', 'Bir Aşk Hikâyesi', 'Bir Litre Gözyaşı', 'Bir Peri Masalı', 'Birdman of Alcatraz', 'Black Lady Sketch Show', 'Black Water Abyss', 'Blackout 5', 'Blizzard', 'Blown Away', 'Boogie', 'Borderline', 'Breaking the Bank', 'Broken', 'Bros', 'Buena Vista Social Club: Adios', 'Buğday', 'Bullet Bullet', 'Bullet Head', 'Cake Boss', 'Call the Midwife', 'Cam Tavanlar', 'Canavar Gibi', 'Captain Fantastic', 'Captain Tsubasa', 'Car SOS', 'Caravaggio', 'Carnaval', 'Centaurworld', 'Chaos on the Bridge', 'Charlotte', 'Chasing Monsters', 'Chef Gone Wild', "Chip' N' Dale Rescue Rangers", 'Christmas Story', 'Community', 'Como Sobrevivir Soltero', 'Concrete Cowboy', 'Conor McGregor: Notorious', 'Craft Wars', 'Crash & Bernstein', 'Crazy for Football', 'Criket Fever', 'Crimenes De Familia', 'Çarpışma', 'Çift Kişilik Oda', 'Çilek Kokusu', 'Çukur', 'Çukurova', 'Dance Academy', 'Danny Boy', 'Dark', 'Darmaduman', 'Das Boot', 'Das Schaurige Haus', "Dawson's Creek", 'DCI Banks', 'DC Super Hero Girls', "Dead Mother's Club", 'Death by Magic', 'Death in Paradise', 'Death Wish 3', 'Death Wish 4', 'Deha', 'Delta Force 2: the Colombian Connection', 'Dias de Gallos', 'Dirty Old Cars', 'Doctor Foster', 'Doctor Who', 'Dollar', 'Dört Mevsim', 'Duel At Diablo', 'Dünyayla Bizim Aramızda', 'Earthquake', 'Edge of the Earth', 'Edifico', 'Eh Aye', 'Einsatzgruppen', 'Emperor', 'En Uzun Gece', 'Evlilik Hakkında Her Şey', 'Extreme Cheapstakes', 'Extortion', 'Ezel', 'Fallout', 'Fancy Nancy', 'Fandry', 'Father Brown', 'Fate Grand Order', 'Feel the Beat', 'Female Fight Club', 'Finally Dawn', 'Fish or Die', 'Flawless', 'Flesh + Blood', 'Flint PD', 'Flower Knight', 'Forbidden School', 'Freelancers', 'Fuller House', 'Gaddar', 'Garaj Dans', 'Garaj Exxen', 'Generation Kill', 'Genie', 'Gentefied', 'Getting Even With Dad', 'Ghosts of Sugar Land', 'Gizli Saklı', 'God on Trial', 'Gods Must Be Crazy', 'Gods Must Be Crazy II', 'Golfs Greatest Holes', 'Gone for Good', 'Good Omens', 'Gönül', 'Great Escape', 'Gretel & Hansel', 'Guilt', 'Gülcemal', 'Güldür Güldür', 'Güldüy Güldüy', 'Gülperi', 'Gülümse Yeter', 'Guns of the Magnificent Seven', 'Güvercin Hırsızları', 'Güzel Aşklar Diyarı', 'H2O', 'Habla Women', 'Halloween Ends', 'Halloween Kills', 'Hannah And Her Sisters', 'Happy Valley', 'Harley Davidson And the Marlboro Man', 'Harriet', 'Hayat Şans', 'Hayatta Olmaz', 'Hell or High Water', 'Hello, Jack', 'Hercule Poirot - The Yellow Iris', 'Highway Thru Hell', 'Hinterland', 'Home Improvement', 'Honk for Jesus. Save Your Soul.', 'Hoosiers', 'Horrible Histories', 'Hotel Babylon', 'Hudutsuz Sevda', 'Ibo', 'İbo', 'Illegal', 'Illiza Shlesinger Confirmed Kills', 'Immigration Nation', 'In Plain Sight', 'In the Dark', 'Invaders From Mars', 'IP Man', 'Irma La Douce', 'Iron Mask', 'Island Life', 'Issız Adam', 'İsveçli Yahya', 'İyilik', 'İzci Team', 'Jane the Virgin', 'Jimmy Carr', 'Jiro Dreams of Sushi', 'Jon & Kate Plus 8', 'Jonathan Creek', 'Just Before I Go', 'Kaçak', 'Kara Para Aşk', 'Karadayı', 'Karanlık Miras', 'Katakulli', 'Katakulli: Gözü Karalar', 'Katakulli: Tam Zamanı', 'Katakulli: Tuzak', "Kevin Hart - Don't Fuck This Up", 'Kidibli', 'Kill Chain', 'Kingdom', 'Kırk Yalan', 'Kısmet', 'Kızma Kazan', 'Koku', 'Korkma Ben Yanındayım', 'Kronovizör', 'Kurt Seyit', 'Kusursuz Kiracı', 'Kuşatmadan Sonra', 'Kuzey Yıldızı', 'Kuzeydeki Bayrak: Kıbrıs', 'La Cocinera de Castamar', 'Lana Longbeard', 'Last Call Food Brawl', 'Last Knights', 'Last Tango In Paris', 'Le Chef', 'Legends of Hells Gate', 'Lego Star Wars: The Freemaker Adventures', 'Lego Star Wars: The Resistence Rises', 'Leyla', 'Life Below Zero', 'Life in Pieces', 'Life Story', 'Little People Big World', 'Lockup Women Behind Bars', 'Lois and Luca: Mission to the Moon', 'Losers', 'Lost & Found', 'Louis Thereoux Extreme Love', 'Louis Thereoux Twillight of the Porn Stars', 'Love Guaranteed', 'Love is Blind', 'Luther', 'M.O.D.O.K.', 'Maffy', 'Mahkum', 'Maigret', 'Making a Murderer', 'Mala Mala', 'Malang', 'Manhattan', 'Mark Rober Series', 'Married to Medicine: Atlanta', 'Marseille', 'Master of None', 'Masters of Disguise', 'McLaren', 'Meet Me in the Bathroom', 'Meksikalı Recep', 'Melting Me Softly', 'Menajerimi Ara', 'Miami Bici', 'Miami Vice', 'Miraculous Tales of Lady Bug and Cat Noir: Secrets', 'Misafir', 'Mondays at Racine', 'Movie 43', 'Much Loved', 'Mucize Aynalar', 'Mucize Doktor', 'Murder in the Skies', 'Murdoch Mysteries', 'My Brother Chases Dinosaurs', 'My Dearest', 'My Extraordinary Summer With Tess', 'My First Love', 'My Friends Tigger and Pooh', 'Myth Mogul John DeLorean', 'Nailed It! Holiday', "Nature's Great Events", 'Necessary Roughness', 'New Blood', 'New Tricks', 'No Way Out', 'Noble Things', 'Nope', 'North America', 'Nothing Left Unsaid: Gloria Vanderbilt & Anderson Cooper', 'Nöbet', 'Nullpunkt', 'Octonauts & the Great Barrier Reef', 'Odd Thomas', 'Oğlum', 'Old Money', 'Olmadı Kaçarız', 'One Bad Choice', 'Only Murders in the Building', "Oprah's Lifeclass", 'Original Sin', 'Orphan Black', 'Os Salafrrios', 'Our Girl', 'Our Zoo', 'Overboard', 'Oyun Bitti', 'Öğretmen', 'Panda vs Ailen', 'Paraiso', 'Paradise Lost 3: Purgotory', 'Party of Five', 'Paula', 'Peaky Blinders', 'Penguin Town', 'Peri Masalı', 'Pit Bulls and Parolees', 'Plane Crash Recreated', 'Planet Earth the Future', 'Player', 'Plot for Peace', 'Poor Devil', "Poppa's House", 'Powerpuff Girls', 'Prank Encounters', 'Prens', 'Pretty Smart', 'Prey', 'Punping Iron', 'Puppy Swap', 'Queer Eye', 'Quigley Down Under', 'Radio Days', 'Rafadan Tayfa', 'Raging Planet', 'Ramo', 'Randy to the Rescue', 'Reboot the Guardian Code', 'Red vs Blue', 'Renegades', 'Reprisal', 'Return of the Seven', 'Reversal of Fortune', "Richard Hammond's Crash Course", 'Rillington Place', 'Ripper Street', 'Rivers Edge', 'Robocop 3', 'Rocca Changes the World', 'Rodney Carrington', 'Rolkes', 'Rome Underground', 'Rotten', 'Rough', "Ru Paul's Drag Race", 'Runaway Train', 'Running Scared', 'Sadakatsiz', 'Safe Haven', 'Sandstorm', 'Say Yes to the Dress', 'Scott and Bailey', 'Scrap Kings', 'Secret Lives of Stepford Wives', 'Secret Restorations', 'Selling Sunset', 'Sen Çal Kapımı', 'Sergio', 'Seviyor Sevmiyor', 'Sıccın', 'Siyah İnci', 'SS-GB', 'Şahane Hayatım', 'Şahmaran', 'Şakir Paşa Ailesi', 'Shakespeare & Hathaway: Private Investigators', 'Shark', 'Shark School', 'She Means Business', 'She Said', 'Sherlock', 'Sherlock Holmes and the Case of Silk Stocking', 'Sherlock Holmes and the Hound of Baskervilles', 'Şeref Sözü', 'Silber', 'Silent Witness', 'Sin City Motors', 'Sinbad', 'Sisi', 'Six Degrees of Seperation', 'Skin Deep', 'Sleepover', 'Snowfall', 'Someone You Thought You Knew', 'Son of God', 'Soundtrack', 'South Pacific', 'Space Force', 'Species', 'Stalk Show', 'Star Trek: Lower Decks', 'Stargate', 'Stargate - Continuum', 'Stella', 'Steven Spielberg Project', 'Steven Universe', 'Strike Back', 'Suburra', 'Summer Camp', 'Suspicions of Mr. Whicher', 'Swashbuckle', 'Tabula Rasa', 'Talking Heads', 'Tár', 'Taş Kâğıt Makas', 'Terrace House', 'Terrace House Aloha State', 'Terrace House Opening New Doors', 'Terrorism Close Calls', "That 70's Show", 'The Age of Adaline', 'The Agency', 'The Amityville Horror', 'The Bachelors', 'The Bold Type', 'The Break Up', 'The Chef Show', 'The Choe Show', 'The Circle Game', 'The Collection', 'The Confidante', 'The Coroner', 'The Crew', "The Devil's Plan", 'The Devils Light', 'The Dirt', 'The Durrells', 'The Eagle', 'The Exorcist', 'The Fighter', 'The Forever Prisoner', 'The Game', 'The Gift', 'The Guernsey Literary and Potato Peel Pie Society', 'The Iceman and the Psychiatrist', 'The Iceman Confesses', 'The Kettering Incident', 'The Killing', 'The Kings of Summer', 'The Last Nazis', 'The Last Post', 'The Living and the Dead', 'The Long Riders', 'The Magnificent Seven', 'The Misfits', 'The Musketeers', 'The Neighborhood', 'The Next Great Baker', 'The Night of the Hunter', 'The Photograph', 'The Protector', 'The Puppet Master', 'The Real Ghostbusters', 'The Real Housewives of Salt Lake', 'The Redbook Ritual', 'The Return of the Living Dead', 'The Rise of Espresso', 'The Rookie', 'The Speed Cubers', 'The Split', 'The Third Murder', 'The Tourist', 'The Train', 'The Trial of Christine Keeler', 'The Tuskegee Airmen', 'The Unthinkable', "The World's Most Amazing Vacation Rentals", 'The Worst Witch', 'The Young Victoria', 'Throw Mamma From the Train', 'Ticket to Paradise', 'Tinker Tailor Soldier Spy', 'To the Lake', 'Tokarev', 'Top of The Lake', 'Toxic', 'Travelers', 'Tresures Decoded', 'Triple Threat', 'Trotsky', 'Tyrant', 'Üç Kuruş', 'Ugly Delicious', 'Ultimate Beastmaster', 'Unforgotten', 'Unleashed', 'Upside Down', 'Uzak Şehir', 'Valley Girl', 'Veep', 'Vera Cruz', 'Versailles', 'Virgin Suicides', 'Wallay', 'War and Peace', 'Watson', 'Way Down', 'Wet Hot American Summer', 'What Happened in Oslo', 'Where Do You Go, Bernadette', 'Whitechapel', 'Wicked Tuna', 'Wild Alaska', 'Wir Sind Die Welle', 'Wolf Hall', 'Wolfblood', 'World Eat Bread', 'WWII Tank Showdown', 'Ya Çok Seversen', 'Yabani', 'Yalancılar ve Mumları', 'Yanık Koza', 'Yargı', 'Year of the Dragon', 'Yellow Stone', 'Yentl', 'Yer Gök Aşk', "You'll Never Walk Alone", 'Young Guns II', 'Youngistaan', 'YuGiOh', 'Zamanın Kapıları', 'Zemheri', 'Zoo', 'Zoraki Misafir'
].sort((a, b) => a.localeCompare(b, 'tr-TR'));

export default function Home() {
  return (
    <>
      <div 
        className="bg-background text-foreground min-h-screen flex flex-col items-center gap-6 p-4 md:p-6"
      >
        <div
          className="w-full max-w-[850px] flex flex-col items-center gap-6"
        >
          <div className="w-full mx-auto shadow-lg rounded-3xl overflow-hidden">
            <div className="bg-card">
              <header>
                <div 
                  className="relative w-full h-[240px] md:h-[300px]"
                  style={{ backgroundColor: '#fefdee' }}
                >
                  <Image
                    src="/banner.png"
                    alt="Banner"
                    fill
                    className="object-contain p-0"
                    priority
                  />
                </div>
                <div className="bg-primary text-primary-foreground py-3 text-center">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Batıkan Bahadır Ünsal
                  </h1>
                  <p className="mt-1 text-base md:text-lg" style={{ color: '#fefdee' }}>
                    10+ years of experience in localization services
                  </p>
                  <p className="text-base md:text-lg" style={{ color: '#fefdee' }}>
                    English ↔ Turkish subtitle creation, dubbing, SDH, and transcription
                  </p>
                </div>
              </header>

              <main>
                <div
                  className="border-t border-border px-6 md:px-8 pb-5 pt-4 text-center overflow-hidden flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#fefdee' }}
                >
                  <div className="space-y-3 leading-relaxed text-base">
                    <p>
                      Experience in most streaming platforms and networks
                      including:
                      <br />
                      Netflix • Disney+ • Apple TV+ • Amazon Prime Video • HBO Max
                      <br />
                      TLC • BBC • Discovery • Cartoon Network • Nickelodeon
                      <br />
      
                      plus other minor platforms and Turkish television networks
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div
            className="w-full mx-auto shadow-lg rounded-3xl overflow-hidden p-6 flex flex-col items-center justify-center"
            style={{ backgroundColor: '#fefdee' }}
          >
            <div className="text-center text-lg">
              <p>
                4000+ files delivered
                <br />Projects listed in alphabetical order:
              </p>
            </div>
            <div className="mt-4 flex justify-center w-full">
              <ScrollArea className="h-[330px] w-full max-w-[640px] rounded-lg border bg-background p-3">
                <div>
                  {workItems.map((item, index) => (
                    <div key={index} className="flex items-center text-base pl-2 py-0 border-b border-accent last:border-b-0 gap-4">
                      <div className="flex items-center text-accent font-medium w-10 justify-end">
                        <span>{index + 1}</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M20.25 4.75H22V2.75H20.25V4.75ZM18 6.25H22V8.25H18V6.25ZM18 9.75H22V11.75H18V9.75ZM20.25 13.25H22V15.25H20.25V13.25ZM18 16.75H22V18.75H18V16.75ZM20.25 20.25H22V22.25H20.25V20.25ZM13 2.75H15V4.75H13V2.75ZM13 6.25H15V8.25H13V6.25ZM13 9.75H15V11.75H13V9.75ZM13 13.25H15V15.25H13V13.25ZM13 16.75H15V18.75H13V16.75ZM13 20.25H15V22.25H13V20.25ZM5.75 2.75H7.75V4.75H5.75V2.75ZM5.75 6.25H7.75V8.25H5.75V6.25ZM5.75 9.75H7.75V11.75H5.75V9.75ZM5.75 13.25H7.75V15.25H5.75V13.25ZM5.75 16.75H7.75V18.75H5.75V16.75ZM5.75 20.25H7.75V22.25H5.75V20.25ZM2 2.75H4V4.75H2V2.75ZM2 6.25H4V8.25H2V6.25ZM2 9.75H4V11.75H2V9.75ZM2 13.25H4V15.25H2V13.25ZM2 16.75H4V18.75H2V16.75ZM2 20.25H4V22.25H2V20.25Z" /><path d="M22 2.75H2V22.25H22V2.75Z" /></svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="h-3"></div>
          </div>
          <div
            className="w-full mx-auto shadow-lg rounded-3xl overflow-hidden flex flex-col justify-center"
            style={{ backgroundColor: '#fefdee' }}
          >
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  );
}
