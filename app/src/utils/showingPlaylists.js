const popPlaylistData = {
  name: "Pop Up",
  image: "https://i.scdn.co/image/ab67706f00000003a406c2b7442b69788417a4b6",
  link: "https://open.spotify.com/playlist/37i9dQZF1DX6aTaZa0K6VA",
  description: "Super mega hits! Foto: Rema & Selena Gomez",
};

const rockPlaylistData = {
  name: "Rock Forever",
  image: "https://i.scdn.co/image/ab67706f00000003b16b4319c1c42ff5aef89315",
  link: "https://open.spotify.com/playlist/37i9dQZF1DXcmaoFmN75bi",
  description:
    "Os hits do rock internacional e nacional estão reunidos nesta playlist. Foto: Eddie Van Halen.",
};

const pagodePlaylistData = {
  name: "Pagode das Antigas",
  image: "https://i.scdn.co/image/ab67706f000000031081b6ac4a1d46319bfd7075",
  link: "https://open.spotify.com/playlist/37i9dQZF1DXchBFvKSUooB",
  description:
    "Uma viagem no tempo através dos hits clássicos do Pagode. Foto: Molejo",
};

export function showingPlaylistData(label) {
  var auxArray = [];
  switch (label) {
    case "Pop":
      return [popPlaylistData];
    case "Rock":
      return [rockPlaylistData];
    case "Pagode":
      return [pagodePlaylistData];
    case "Pop e Rock":
      auxArray.push(popPlaylistData, rockPlaylistData);
      return auxArray;
    case "Pop e Pagode":
      auxArray.push(popPlaylistData, pagodePlaylistData);
      return auxArray;
    case "Rock e Pagode":
      auxArray.push(rockPlaylistData, pagodePlaylistData);
      return auxArray;
    default:
      return false;
  }
}
