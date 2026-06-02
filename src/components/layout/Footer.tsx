import { profile } from '../../data/portfolio'

export function Footer() {
  return <footer className="footer">{profile.name} - {profile.title}</footer>
}
