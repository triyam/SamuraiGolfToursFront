import React from "react";
import { Link } from 'react-router-dom';
// import '../../Assets/css/footer.css';
import Logo3 from '../../../../Assets/img/main/logo-3.png';

const AppFooter = () => (
	<>
		<div>
			<footer className="footerop" id="footer" >
				{/* <img src={Logo3} alt="" /> */}
				<div className="footer_nav">
					{/* <Link className="left" to="/lorem" state={{ title: 'About US' }}> */}
						<Link to='/lorem'>About US</Link> 
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: 'ゴルフ場・宿泊・観光地の登録について' }}> */}
					<Link to='/lorem'>ゴルフ場・宿泊・観光地の登録について</Link> 
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: '利用規約' }}> */}
					<Link to='/lorem'>利用規約</Link>
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: 'プライバシー' }}> */}
					<Link to='/lorem'>プライバシー</Link>
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: '行政・観光協会の皆様へ' }}> */}
					<Link to='/lorem'>行政・観光協会の皆様へ</Link>
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: 'お問合せ' }}> */}
					<Link to='/lorem'>お問合せ</Link>
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: '企業情報' }}> */}
					<Link to='/lorem'>企業情報</Link>
					{/* </Link> */}
					<span>|</span>
					{/* <Link className="left" to="/lorem" state={{ title: 'キャンセルポリシー' }}> */}
					<Link to='/lorem'>キャンセルポリシー</Link>
					{/* </Link> */}
				</div>
				<div className="copyright">
					<p>copyright (c) all rights reserved.</p>
				</div>
			</footer>
		</div>

	</>
)

export default AppFooter