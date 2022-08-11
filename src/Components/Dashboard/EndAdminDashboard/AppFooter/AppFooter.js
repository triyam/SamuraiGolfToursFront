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
						<Link to='/lorem'>About US</Link> 
					<span>|</span>
					<Link to='/lorem'>ゴルフ場・宿泊・観光地の登録について</Link> 

					<span>|</span>
		
					<Link to='/lorem'>利用規約</Link>

					<span>|</span>
	
					<Link to='/lorem'>プライバシー</Link>
		
					<span>|</span>
			
					<Link to='/lorem'>行政・観光協会の皆様へ</Link>
		
					<span>|</span>
		
					<Link to='/lorem'>お問合せ</Link>
	
					<span>|</span>
				
					<Link to='/lorem'>企業情報</Link>
			
					<span>|</span>
			
					<Link to='/lorem'>キャンセルポリシー</Link>
		
				</div>
				<div className="copyright">
					<p>copyright (c) all rights reserved.</p>
				</div>
			</footer>
		</div>

	</>
)

export default AppFooter