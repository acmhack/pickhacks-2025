import styles from '@/styles/components/SponsorBox.module.css';

interface IProps {
	link: string;
	logo: string;
	tier: 'Gold' | 'Silver' | 'Bronze' | 'Partner';
}

const SponsorBox = ({ link, logo, tier }: IProps) => {
	return (
		<a
			className={styles.sponsorBox}
			href={link}
			target="_blank"
			style={
				tier === 'Partner'
					? { width: '15em', height: '15em', backgroundImage: 'url(/images/backgrounds/PartnerFrame1.png)' }
					: tier === 'Gold'
					? { width: '21em', height: '21em', backgroundImage: 'url(/images/backgrounds/Plat1.png)' }
					: tier === 'Silver'
					? { width: '18em', height: '18em', backgroundImage: 'url(/images/backgrounds/Plat1.png)' }
					: { width: '15em', height: '15em', backgroundImage: 'url(/images/backgrounds/Bronze1.png)' }
			}
		>
			<img src={logo} className={styles.logo} style={tier === 'Partner' ? {} : { top: '-12px', left: '-5px' }}></img>
		</a>
	);
};

export default SponsorBox;
