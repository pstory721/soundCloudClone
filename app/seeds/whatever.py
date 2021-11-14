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
        title='Rap', user_id = 1, song_id = 2,
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

    db.session.add(Epic)
    db.session.add(Carolltan)
    db.session.add(Paris)
    db.session.add(Hot)
    db.session.add(Enemy)
    db.session.add(King)
    db.session.add(Popular)
    db.session.add(Wash)
    db.session.add(Day)

    db.session.commit()
