import React, { useEffect } from 'react';
import { useState } from 'react';
import { SiYoutubemusic } from 'react-icons/si';
import { BiCommentError } from 'react-icons/bi'; 
import { BsHeadphones } from 'react-icons/bs';
import { useArtistData } from '../../contexts/artistContext';
import styles from './Artists.module.css';

export const Artists = () => {
  const [artist, setArtist] = useState('');
  const dataStore = JSON.parse(window.localStorage.getItem('data'));
  const { dataArtist, getDataArtist, data, loading, errorSystem } = useArtistData();

  const handleSubmitArtist = (e) => {
    e.preventDefault();
    getDataArtist(artist);
    window.localStorage.clear(); 
  }

  if (artist.length == '') {
    window.localStorage.clear()
  }

  return (
    <main className='container'>
      <div className={styles.headerRequest}>
        <article className={styles.text_about}>
          <h2>Deezer API</h2>
          <p>Consulte e saiba sobre os artistas.</p>
        </article>
        <form onSubmit={handleSubmitArtist} className={styles.formSearchArtist}>
          <input
            type="text"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder='Digite o nome do artista'
          />
          {loading ? <button className={styles.getArtist} disabled>Aguarde...</button> : <button className={styles.getArtist}>Buscar</button>}
        </form>
      </div>

      {errorSystem && <p className='messageErrorSearch'><BiCommentError/> Artista não encontrado(a).</p>}

      <div className={styles.artist}>

        <div className={styles.detalsArtist}>
          <img className={styles.imageArtist} src={dataArtist.picture} alt={dataArtist.name} />
          <h2 className={styles.info_center}>{dataArtist.name}</h2>
          {dataStore && <ul className={styles.optionsNetwork}>
            <li>
              <a className={styles.iconDeezer} href={"https://www.deezer.com/search/" + dataArtist.name} target='_blank' ><BsHeadphones /></a>
            </li>
          </ul>}
        </div>

        {dataStore && <div>
          <h3 className={styles.musicMoment}>Música do momento do artista</h3>
          <div className={styles.previewMusic}>
            {dataStore != null &&
              <article className={styles.music_artist}>
                <p>{dataStore.title}</p>
                <audio controls>
                  <source src={dataStore.preview} type='audio/mp3' />
                </audio>
              </article>
            }
          </div>
          <h4>Participações </h4>
        </div>}
        {
          data.map(data => (
            <div className={styles.albumAbout}>
              <img className={styles.imageAlbum} src={data.album.cover} alt="" />
              <p>{data.album.title}</p>
              <a className={styles.btnYtViewMusic} href={`https://www.youtube.com/results?search_query=${data.album.title}`} target="_blank"><SiYoutubemusic /></a>
            </div>
          ))
        }
      </div>
    </main>
  )
}
