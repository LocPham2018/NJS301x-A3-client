import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { actions } from '../../store';
import { useHttp } from '../../hooks/use-http';
import { SERVER_URL } from '../../others/request';

const Navbar = () => {
	const navigate = useNavigate();
	const classNameHandler = ({ isActive }) =>
		isActive
			? 'link-primary text-decoration-none px-2'
			: 'link-dark text-decoration-none px-2';

	const dispatch = useDispatch();
	const { sendRequest: getSessionInfo } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/auth/session`,
		};

		getSessionInfo(requestInput, responseData => {
			if (responseData.user) {
				dispatch(actions.onLogin(responseData.user));
			}
		});
	}, [dispatch, getSessionInfo]);

	const loginUser = useSelector(state => state.loginUser);
	const { onLogout } = actions;
	const { sendRequest: logout } = useHttp();

	const logoutHandler = () => {
		const requestInput = {
			url: `${SERVER_URL}/auth/logout`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		};

		logout(requestInput, responseData => {
			if (responseData.err) {
				console.log(responseData.err);
			}
			// ON_LOGOUT action
			dispatch(onLogout());
			navigate('/');
		});
	};

	return (
		<header className="bg-white text-dark">
			<div className="container-lg d-flex justify-content-between align-items-center py-4">
				<div>
					<NavLink to="/" className={classNameHandler}>
						Home
					</NavLink>
					<NavLink to="/shop" className={classNameHandler}>
						Shop
					</NavLink>
				</div>
				<h2>BOUTIQUE</h2>
				<div>
					{!loginUser && (
						<NavLink to="/login" className={classNameHandler}>
							Login
						</NavLink>
					)}
					{loginUser && (
						<>
							<NavLink to="/cart" className={classNameHandler}>
								Cart
							</NavLink>
							<NavLink
								to={`/orders/${loginUser._id}`}
								className={classNameHandler}
							>
								History
							</NavLink>
							<span className="px-2">{loginUser.fullName}</span>
							<span
								className="px-2"
								onClick={logoutHandler}
								style={{ cursor: 'pointer' }}
							>
								(Logout)
							</span>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
