"""empty message

Revision ID: 3e630beaf116
Revises: ff90d72713da
Create Date: 2021-11-13 21:26:25.705517

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e630beaf116'
down_revision = 'ff90d72713da'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('playlist_join', 'song_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('playlist_join', 'playlist_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.drop_column('playlist_join', 'id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('playlist_join', sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False))
    op.alter_column('playlist_join', 'playlist_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('playlist_join', 'song_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
