/** @format */

import React, { Component } from 'react';
import Like from './common/Like';
import Table from './common/Table';

class MoviesTable extends Component {
	columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
		{
			key: 'like',
			content: (movie) => (
				<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
			),
		},
		{
			key: 'delete',
			content: (movie) => (
				<button
					onClick={() => this.props.onDelete(movie)}
					className='btn btn-danger'>
					Delete
				</button>
			),
		},
	];

	render() {
		const { movies, onSort, sortColumn } = this.props;
		return (
			<div>
				<Table
					data={movies}
					onSort={onSort}
					sortColumn={sortColumn}
					columns={this.columns}
				/>
			</div>
		);
	}
}

export default MoviesTable;
