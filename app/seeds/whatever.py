from app.models import db, Song


def seed_songs():
    Epic = Song(
        title='Epic', artist ='Benjamin Tissot', length = '2:58', likes = 1, user_id = 1, users = "Demo"
    )

    Rise_of_the_Machines = Song(
        title= 'Rise of the Machines', artist = 'Alexander Vasenin', length = ":59", likes = 4, user_id = 2, users = 'Marnie'
    )

    Midnight_Sky = Song(
        title='Midnight Sky', artist = 'Anton Vlason', length = '2:14', likes = 2, user_id = 3, users = 'Bobbie'
    )

    High_Octane = Song(
        title = 'High Octane', artist = 'Benjamin Tissot', length = '2:35', likes = 5, user_id = 1, users = 'Demo'
    )
