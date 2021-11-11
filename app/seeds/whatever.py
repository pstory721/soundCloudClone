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
        title='Epic', artist ='Benjamin Tissot', length = 2.58, likes = 1, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
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
        title = 'High Octane2', artist = 'Benjamin Tissot', length = 2.35, likes = 5, song_url = 'test', image_url = 'https://www.citypng.com/public/uploads/preview/angry-face-cartoon-emoji-emoticon-11583162033dyss1ioj5v.png', user_id = 1
    )


    db.session.add(Epic)
    db.session.add(Rise_of_the_Machines)
    db.session.add(Midnight_Sky)
    db.session.add(High_Octane)

    db.session.commit()
