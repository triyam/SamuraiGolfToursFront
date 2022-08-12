import React from "react";

const AppMenuOption = () => (
	<>
		<nav className="mt-2">
			<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
				<li className="nav-item">
					<a href="/" className="nav-link">
						<i className="nav-icon fas fa-th"></i>
						<p>
							Dashboard
						</p>
					</a>
				</li>
				<li className="nav-item">
					<a href="/" className="nav-link">
						<i className="nav-icon fas fa-th"></i>
						<p>
							Logout
						</p>
					</a>
				</li>
			</ul>
		</nav>
	</>
)

export default AppMenuOption