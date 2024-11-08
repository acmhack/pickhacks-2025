import * as React from 'react';
import { picklogo25, discord, instagram, linkedin, tiktok, devpost } from '@/lib/Images';
import styles from '@/styles/components/Navbar.module.css';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import MobileNavbar from './MobileNavbar';
import PushButton from './PushButton';

function Navbar() {
	const matches = useMediaQuery('(max-width: 1139px)');

	if (matches) {
		return <MobileNavbar />;
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<a href='#home' className={styles.logo}>
						<img src={picklogo25.src} />
					</a>
					<li>
						<a className={styles.buttons} href='#schedule'>
							Schedule
						</a>
					</li>
					<li>
						<a className={styles.buttons} href='#sponsors'>
							Sponsors
						</a>
					</li>
					<li>
						<a className={styles.buttons} href='#faq'>
							FAQ
						</a>
					</li>
					<li>
						<a className={styles.buttons} href='#team'>
							Team
						</a>
					</li>
					<PushButton variant='primary' size='sm' href='https://www.register.pickhacks.io' text='register'></PushButton>
				</ul>
				<ul className={styles.social}>
					<div className={styles.socialContainer}>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://pickhacks-2024.devpost.com/' target='_blank'>
								<img src={devpost.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.instagram.com/sandtpickhacks' target='_blank'>
								<img src={instagram.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://discord.gg/weJVRv4Rk9' target='_blank'>
								<img src={discord.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.linkedin.com/company/pickhacks' target='_blank'>
								<img src={linkedin.src} />
							</a>
						</li>
						<li className={styles.socialitem}>
							<a className={styles.icon} href='https://www.tiktok.com/@sandtpickhacks' target='_blank'>
								<img src={tiktok.src} />
							</a>
						</li>
					</div>
					<a
						id='mlh-trust-badge'
						style={{ display: 'block', width: '100px', zIndex: 10000, marginTop: '6.5em' }}
						href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white'
						target='_blank'
					>
						<img
							src='https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg'
							alt='Major League Hacking 2025 Hackathon Season'
							style={{ width: '100%' }}
						></img>
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
