from app.models import db, Song
import datetime


def seed_songs():
    Epic = Song(
        title='Epic', artist ='Benjamin Tissot', length = datetime.time(0,2,58), likes = 1, song_url = 'test', image_url = 'test', user_id = 1
    )

    Rise_of_the_Machines = Song(
        title= 'Rise of the Machines', artist = 'Alexander Vasenin', length = datetime.time(0,0,59), likes = 4, song_url = 'test', image_url = 'test', user_id = 2
    )

    Midnight_Sky = Song(
        title='Midnight Sky', artist = 'Anton Vlason', length = datetime.time(0,2,14), likes = 2, song_url = 'test', image_url = 'test', user_id = 3
    )

    High_Octane = Song(
        title = 'High Octane', artist = 'Benjamin Tissot', length = datetime.time(0,2,35), likes = 5, song_url = 'test', image_url = 'test', user_id = 1
    )

    db.session.add(Epic)
    db.session.add(Rise_of_the_Machines)
    db.session.add(Midnight_Sky)
    db.session.add(High_Octane)

    db.session.commit()
