from app.models import db, Song, Playlist, Playlist_Join



def seed_playlist_join():
    Test = Playlist_Join(
        song_id = 2, playlist_id = 1,
    )
    Test2 = Playlist_Join(
        song_id = 3, playlist_id = 1,
    )
    Test3 = Playlist_Join(
        song_id = 4, playlist_id = 1,
    )
    db.session.add(Test)
    db.session.add(Test2)
    db.session.add(Test3)
    db.session.commit()


def seed_playlist():
    Test = Playlist(
        title='Rap', user_id = 1
    )
    db.session.add(Test)
    db.session.commit()


def seed_songs():
    Epic = Song(
        title='Epic', artist ='Benjamin Tissot', length = 2.58, likes = 1, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840695/bensound-epic_n8ewkx.mp3",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636840671/epic_cbgfk6.jpg", user_id = 2
    )
    Carolltan = Song(
        title='Carolltan', artist ='Suicide Boys', length = 3.24, likes = 15, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840293/Carrollton_y3kbuc.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636841171/54919a5808730abda8ec44a4fbc8a2cb.1000x1000x1_ote9u3.png", user_id = 1
    )
    Paris = Song(
        title='Paris', artist ='Suicide Boys', length = 1.47, likes = 32, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840301/UICIDEBOY_-_PARIS_uq6xhb.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636841135/maxresdefault_qixegr.jpg", user_id = 1
    )
    Hot = Song(
        title='Hot Demon B!tches Near You', artist ='Corpse', length = 1.37, likes = 12, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840307/HOT_DEMON_B_TCHES_NEAR_U_ocn5o6.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636841048/ab67706c0000bebbea79c6c74f125c03d0872044_vfsil8.jpg", user_id = 1
    )
    Enemy = Song(
        title='Enemy', artist ='Imagine Dragons X JID', length = 3.34, likes = 54, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840313/Imagine_Dragons_x_J.I.D_-_Enemy_from_the_series_Arcane_League_of_Legends_jv7flv.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636841007/IDEnemyJID_glolkc.jpg", user_id = 3
    )
    King = Song(
        title='KingSlayer', artist ='Bring Me The Horizon', length = 3.41, likes = 72, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840317/Bring_Me_The_Horizon_-_Kingslayer_Lyric_Video_ft._BABYMETAL_o9efey.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636840976/81PS_2B50RLDL._AC_UL600_SR600_600__g0o01u.jpg", user_id = 4
    )
    Popular = Song(
        title='Popular Monster', artist ='Falling In Reverse', length = 3.53, likes = 61, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840324/Falling_In_Reverse_-__Popular_Monster__c92btv.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636840946/Popular_Monster_cover_gfbxz6.jpg", user_id = 4
    )
    Wash = Song(
        title='Wash it all away', artist ='Five Finger Death Punch', length = 3.45, likes = 49, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840328/Five_Finger_Death_Punch_-_Wash_It_All_Away_Explicit_grdrnh.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636840897/81HELP2U7KL._SS500__lerpse.jpg", user_id = 4
    )
    Day = Song(
        title='DayWalker', artist ='MGK FT.Corpse', length = 2.19, likes = 36, song_url ="https://res.cloudinary.com/dveuedvvm/video/upload/v1636840449/Machine_Gun_Kelly_feat._CORPSE_-_DAYWALKER_Official_Audio_msiunt.mp4",
        image_url = "https://res.cloudinary.com/dveuedvvm/image/upload/v1636840868/machinegunkellyvideo_mdbwnz.jpg", user_id = 4
    )
    Venom = Song(
        title='Venom', artist = 'GHOSTEMANE', length = 2.06, likes = 20, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938882/Styckr/GHOSTEMANE_-_VENOM_s4fg7q.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939164/Styckr/91YhSqj7PUL._SS500__gixlaj.jpg',
        user_id = 2
    )
    Mercury = Song(
        title='Mercury', artist = 'GHOSTEMANE', length = 2.05, likes = 38, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938876/Styckr/GHOSTEMANE_-_Mercury_ovxgyo.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939312/Styckr/34dcc3c1bd9510414b6d321af0bd1d1b_da1g8r.jpg',
        user_id = 2
    )
    Nihil = Song(
        title='Nihil', artist = 'GHOSTEMANE', length = 2.48, likes = 41, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938878/Styckr/GHOSTEMANE_-_Nihil_rwmvmw.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939408/Styckr/artworks-000417587730-zqc3hf-t500x500_a9rg1v.jpg',
        user_id = 2
    )
    Andromeda = Song(
        title = 'Andromeda', artist = 'GHOSTEMANE', length = 2.07, likes = 16, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938873/Styckr/GHOSTEMANE_-_Andromeda_Official_Video_b094mp.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939528/Styckr/819biVRjfrL._SS500__oy5qgp.jpg',
        user_id = 2
    )
    KYOTO = Song(
        title = 'KYOTO', artist='Skrillex', length = 3.20, likes = 79, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938887/Styckr/SKRILLEX_-_KYOTO_FT._SIRAH_t3v9m9.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939651/Styckr/220px-Skrillex_-_Bangarang__EP_mno0cb.png',
        user_id = 3
    )
    First_Of_The_Year_Equinox = Song(
        title= 'First of the Year Exquinox', artist = 'Skrillex', length = 3.14, likes = 43, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938885/Styckr/Skrillex_-_First_Of_The_Year_Equinox_Official_Music_Video_dfpmff.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939806/Styckr/artworks-000010757559-s028go-t500x500_ycshiw.jpg',
        user_id = 3
    )
    PA_PA_YA = Song(
        title = 'PA PA YA', artist = 'BABYMETAL', length = 3.55, likes = 13, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938866/Styckr/BABYMETAL_-_PA_PA_YA_feat._F.HERO_OFFICIAL_kgcqb3.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636939944/Styckr/220px-Babymetal_Pa_Pa_Ya__digital_single_cover_hod5hl.jpg',
        user_id = 2
    )
    Squeeze = Song(
        title = 'Squeeze', artist ='GHOSTEMANE', length = 3.14, likes = 62, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938880/Styckr/GHOSTEMANE_-_Squeeze_eetwjy.mp4', image_urn = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636940045/Styckr/71DYG_Ft5-L._AC_UL600_SR600_600__edqpxv.jpg',
        user_id = 2
    )
    Duality = Song(
        title = 'Duality', artist ='Slipknot', length = 3.33, likes = 99, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938891/Styckr/Slipknot_-_Duality_OFFICIAL_VIDEO_ynu5u5.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636940152/Styckr/R-581973-1345822174-7830.jpeg_ja37i6.jpg',
        user_id = 4
    )
    Before_I_Forget = Song(
        title= 'Before I Forget', artist='Slipknot', length = 4.01, likes = 71, song_url = 'https://res.cloudinary.com/dzjkwepju/video/upload/v1636938889/Styckr/Slipknot_-_Before_I_Forget_OFFICIAL_VIDEO_t6czbu.mp4', image_url = 'https://res.cloudinary.com/dzjkwepju/image/upload/v1636940266/Styckr/13b50ed3d58945178c9f0b6767bd2feb_nkkn7m.jpg',
        user_id = 4
    )

    db.session.add(Epic)
    db.session.add(Carolltan)
    db.session.add(Paris)
    db.session.add(Hot)
    db.session.add(Enemy)
    db.session.add(King)
    db.session.add(Popular)
    db.session.add(Wash)
    db.session.add(Day)
    db.session.add(Venom)
    db.session.add(Mercury)
    db.session.add(Nihil)
    db.session.add(Andromeda)
    db.session.add(KYOTO)
    db.session.add(First_Of_The_Year_Equinox)
    db.session.add(PA_PA_YA)
    db.session.add(Squeeze)
    db.session.add(Duality)
    db.session.add(Before_I_Forget)

    db.session.commit()
