import { AccountDropdown, useSSO } from "@thenolans/nolan-ui";
import Logo from "components/Logo";
import { GITHUB_REPOSITORY_LINK } from "constants/defaults";

export default function Navbar() {
  const { logout } = useSSO();

  return (
    <div className="w-full bg-white sticky top-0 z-20 border-b-2 border-gray-100">
      <div className="flex items-center justify-between h-16 max-w-5xl mx-auto px-4">
        <Logo className="w-auto h-12" />
        <AccountDropdown>
          <AccountDropdown.Anchor href={process.env.REACT_APP_SSO_URL!}>
            Profile
          </AccountDropdown.Anchor>
          <AccountDropdown.Anchor
            href={GITHUB_REPOSITORY_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </AccountDropdown.Anchor>
          <AccountDropdown.Divider />
          <AccountDropdown.Button onClick={() => logout(window.location.href)}>
            Logout
          </AccountDropdown.Button>
        </AccountDropdown>
      </div>
    </div>
  );
}
