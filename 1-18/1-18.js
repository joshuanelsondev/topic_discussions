const usersData = require("./user.data");
// #2
/**
 * Returns the titles of all songs from a specified album.
 * @param {Object[]} songs - An array of songs.
 * @param {string} albumName - Name of the album.
 * @returns {string[]} An array of song titles.
 */
function getSongsFromAlbum(songs, albumName) {
  // const songsFromAlbum = [];

  // for (const song of songs) {
  //   if (albumName === song.album) {
  //     songsFromAlbum.push(song.title);
  //   }
  // }
  // songs.forEach(song => {
  //  if (song.album === albumName) {
  //     songsFromAlbum.push(song.title);
  //  } 
  // })

  return songs.reduce((songsFromAlbum, currSong) => {
      if (currSong.album === albumName) {
        songsFromAlbum.push(currSong.title);
      }
      return songsFromAlbum;
  }, [])
  
  // return songsFromAlbum;
}