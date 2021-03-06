"""empty message

Revision ID: c4db5ae9e1b8
Revises: 82e036661cb2
Create Date: 2021-11-14 16:46:23.623181

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c4db5ae9e1b8'
down_revision = '82e036661cb2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('playlists_song_id_fkey', 'playlists', type_='foreignkey')
    op.drop_column('playlists', 'song_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('playlists', sa.Column('song_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('playlists_song_id_fkey', 'playlists', 'songs', ['song_id'], ['id'])
    # ### end Alembic commands ###
