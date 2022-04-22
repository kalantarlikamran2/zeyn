import { v4 as uuidv4 } from "uuid";
import img1 from "./components/images/a1.jpg"
import img2 from "./components/images/a2.jpg"
import img3 from "./components/images/a3.jpg"
import img4 from "./components/images/a4.jpg"
import img5 from "./components/images/a5.jpg"
import img6 from "./components/images/a6.jpg"
import img7 from "./components/images/a7.jpg"
import img8 from "./components/images/a8.jpg"
import img9 from "./components/images/a9.jpg"
import img10 from "./components/images/a10.png"
import img11 from "./components/images/a11.jpg"
import img12 from "./components/images/a12.jpg"
import img13 from "./components/images/a13.jpg"
import img14 from "./components/images/a14.jpg"
import img15 from "./components/images/a15.jpg"
import img16 from "./components/images/a16.jpg"
import img17 from "./components/images/a17.jpg"
import img18 from "./components/images/a18.jpg"
import img19 from "./components/images/a19.jpg"
import img20 from "./components/images/a20.jpg"
import img21 from "./components/images/a21.jpg"


import mus1 from "./components/music/Arctic Monkeys - Do I Wanna Know (Official Video).mp3"
import mus4 from "./components/music/Barış Diri - Derinden (Derinden - 2021) (Official Video).mp3"
import mus3 from "./components/music/Beach House - Space Song.mp3"
import mus2 from "./components/music/Cage The Elephant - Sweetie Little Jean [türkçe çeviri].mp3"
import mus5 from "./components/music/California Dreaming -  Faye Wong in Chungking Express.mp3"
import mus6 from "./components/music/Charlotte Cardin - Big Boy (Official Audio).mp3"
import mus7 from "./components/music/Charlotte Cardin - Sex To Me [Official Audio].mp3"
import mus8 from "./components/music/Dominic Fike - Elliot’s Song (HQ) (From Euphoria An Original HBO Series).mp3"
import mus9 from "./components/music/FINNEAS - Let's Fall in Love for the Night (Official Video).mp3"
import mus10 from "./components/music/Melanie Martinez - Cake (Lyrics).mp3"
import mus11 from "./components/music/Melanie Martinez - Play Date (Lyrics).mp3"
import mus12 from "./components/music/Outlandish - Callin U (Official Video).mp3"
import mus13 from "./components/music/Radiohead - Creep.mp3"
import mus14 from "./components/music/Sia - Courage To Change (Official Music Video).mp3"
import mus15 from "./components/music/Tame Impala - Feels Like We Only Go Backwards (Official Video).mp3"
import mus16 from "./components/music/Tame Impala - The Less I Know the Better - Speed Up.mp3"
import mus17 from "./components/music/Tamino - Intervals (lyrics).mp3"
import mus18 from "./components/music/The Irrepressibles - Two Men In Love (Türkçe Çeviri).mp3"
import mus19 from "./components/music/Valeree - Any Other Way (Lyric Video).mp3"
import mus20 from "./components/music/Yasmin Levy - Una Noche Mas. Lyrics.mp3"
import mus21 from "./components/music/Yüzyüzeyken Konuşuruz - Esen (Lyrics).mp3"



function chillHop() {
	return [
		{
			name: "Do I Wanna Know?",
			cover:
				img1,
			artist: "Arctic Monkeys",
			audio: mus1,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Sweetie Little Jean",
			cover:
				img2,
			artist: "Cage The Elephant",
			audio: mus2,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Space song",
			cover:
			img3,
			artist: "Beach House",
			audio: mus3,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Derinden",
			cover:
			img4	,
			artist: "Barış Diri",
			audio: mus4,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Faye Wong in Chungking Express",
			cover:
			img5,
			artist: "California Dreaming",
			audio: mus5,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Big Boy",
			cover:
			img6,
			artist: "Charlotte Cardin",
			audio: mus6,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Sex To Me",
			cover:
				img7,
			artist: "Charlotte Cardin",
			audio: mus7,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Elliot’s Song ",
			cover:
				img8,
			artist: "Dominic Fike",
			audio: mus8,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Let's Fall in love for the Night",
			cover:
			img9,
			artist: "FINNEAS",
			audio: mus9,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Cake",
			cover:
			img10	,
			artist: "Melanie Martinez",
			audio: mus10,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Play Date",
			cover:
			img11,
			artist: "Melanie Martinez",
			audio: mus11,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Callin U",
			cover:
			img12,
			artist: "Outlandish",
			audio: mus12,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Creep",
			cover:
				img13,
			artist: "Radiohead",
			audio: mus13,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Courage To Change",
			cover:
				img14,
			artist: "Sia",
			audio: mus14,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Feels Like We Only Go Backwards",
			cover:
			img15,
			artist: "Tame Impala",
			audio: mus15,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "The Less I Know the Better",
			cover:
			img16	,
			artist: "Tame Impala",
			audio: mus16,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Intervals",
			cover:
			img17,
			artist: "Tamino",
			audio: mus17,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Two Men In Love",
			cover:
			img18,
			artist: "The Irrepressibles",
			audio: mus18,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Any Other Way",
			cover:
			img19	,
			artist: "Valeree",
			audio: mus19,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Una Noche Mas",
			cover:
			img20,
			artist: "Yasmin Levy",
			audio: mus20,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Esen",
			cover:
			img21,
			artist: "Yüzyüzeyken Konuşuruz",
			audio: mus21,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
