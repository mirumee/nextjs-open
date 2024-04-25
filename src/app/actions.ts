"use server";

async function wait(n: number = 1000) {
  return new Promise((res) => {
    setTimeout(res, n);
  });
}

const data = {
  songs: [
    {
      "rank": 1,
      "title": "I'm never gonna give you up",
      "artist": "Rick Astley",
      "album": "Hold Me In Your Arms",
      "year": "1965",
      "videoId": "dQw4w9WgXcQ"
    },
    {
      "rank": 2,
      "title": "My Wang",
      "artist": "Frank Wangnatra",
      "album": "@franjiewang",
      "year": "2023",
      "videoId": "qQzdAsjWGPg"
    },
    {
      "rank": 3,
      "title": "Excuse me miSST",
      "artist": "Jay-Air",
      "album": "@Jayair",
      "year": "2023",
      "videoId": "tnDh0JhmaFw"
    },
    {
      "rank": 4,
      "title": "I don't want another CONSOLE-RRY",
      "artist": "Dax",
      "album": "@thxdr",
      "year": "2023",
      "videoId": "4JI70_9acgE"
    }
  ]
}

export type Song = (typeof data.songs)[0];
export type Album = { album: string; artist: string; songs: Song[] };
const albumsMap: { [key: string]: Song[] } = {};

const albums: Album[] = [];
data.songs.forEach((s) => {
  if (!albumsMap[s.album]) {
    albumsMap[s.album] = [s];
  } else {
    albumsMap[s.album].push(s);
  }
});

Object.entries(albumsMap).forEach(([key, album]) => {
  albums.push({
    album: album[0].album,
    artist: album[0].artist,
    songs: album,
  });
});

export async function getAlbums() {
  return albums;
}

export async function getSongs() {
  return data.songs;
}

export async function getSong(album: string, title: string) {
  const song = data.songs.find(
    (song) =>
      song.album === decodeURIComponent(album) &&
      song.title === decodeURIComponent(title),
  );

  return wait(1000).then(() => { return song; });

}