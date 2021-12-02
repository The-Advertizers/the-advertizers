import dynamic from 'next/dynamic'
import styles from './style.module.css';

export default function DynamicHeroIcon({icon, outline, className}) {
  const Icon = dynamic(() =>
    import(`@heroicons/react/${outline? 'outline': 'solid'}`).then((mod) => mod[icon])
  )
  return (<Icon className={`${styles.icon} ${className}`} />);
}
