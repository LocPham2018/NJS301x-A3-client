import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { actions } from '../../store';
import { useGetRequest, useSubmitRequest } from '../../hooks/use-fetch';
import { ENDPOINTS, getPostOptions } from '../../others/request';

const Navbar = () => {
	const navigate = useNavigate();
	const classNameHandler = ({ isActive }) =>
		isActive
			? 'link-primary text-decoration-none px-2'
			: 'link-dark text-decoration-none px-2';

	const dispatch = useDispatch();
	const applySessionData = useCallback(
		responseData => {
			if (responseData.user) {
				dispatch(actions.onLogin(responseData.user));
			}
		},
		[dispatch]
	);
	useGetRequest(ENDPOINTS.session, applySessionData);

	const loginUser = useSelector(state => state.loginUser);
	const { submitRequest } = useSubmitRequest();

	const logoutHandler = () => {
		const options = getPostOptions();

		const applyData = responseData => {
			if (responseData.err) {
				console.log(responseData.err);
			}
			// ON_LOGOUT action
			dispatch(actions.onLogout());
			navigate('/');
		};
		submitRequest(ENDPOINTS.logout, options, applyData);
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
