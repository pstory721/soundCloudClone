from app.models import db, Song, Playlist, Playlist_Join



def seed_playlist_join():
    Test = Playlist_Join(
        song_id = 1, playlist_id = 1
    )
    db.session.add(Test)
    db.session.commit()


def seed_playlist():
    Test = Playlist(
        title='Test', user_id = 1, song_id = 1
    )
    db.session.add(Test)
    db.session.commit()


def seed_songs():
    Epic = Song(
        title='Epic', artist ='Benjamin Tissot', length = 2.58, likes = 1, song_url ='https://res.cloudinary.com/dmtj0amo0/video/upload/v1634664807/Monster%20Hunter/Monster%20Hunter%20World/1.01_Main_Theme_-_Stars_at_Our_Backs_w6c0zt.mp3',
        image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
    )

    Rise_of_the_Machines = Song(
        title= 'Rise of the Machines', artist = 'Alexander Vasenin', length = .59, likes = 4, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 2
    )

    Midnight_Sky = Song(
        title='Midnight Sky', artist = 'Anton Vlason', length = 2.14, likes = 2, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 3
    )

    High_Octane = Song(
        title = 'High Octane', artist = 'Benjamin Tissot', length = 2.35, likes = 5, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
    )

    High_Octane1 = Song(
        title = 'High Octane1', artist = 'Benjamin Tissot', length = 2.35, likes = 5, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
    )

    High_Octane2 = Song(
        title = 'High Octane2', artist = 'Benjamin Tissot', length = 2.35, likes = 5, song_url = 'https://res.cloudinary.com/dmtj0amo0/video/upload/v1633812141/Haikyu%21%21/Second%20Season%20Original%20Soundtrack%20Vol%202/19._Makkou_Shoubu_vnnghs.mp3',
         image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
    )


    db.session.add(Epic)
    db.session.add(Rise_of_the_Machines)
    db.session.add(Midnight_Sky)
    db.session.add(High_Octane)
    db.session.add(High_Octane1)
    db.session.add(High_Octane2)

    db.session.commit()
