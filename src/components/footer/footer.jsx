import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="w-full h-40 px-5 xl:px-40 mb-5">
      <div className="w-full h-full flex rounded-xl">
        <div className="border-2 w-1/3 h-full">
          <h1 className="font-bold text-emerald-600 mb-1">DFootball.</h1>
          <p className="text-xs mb-5 font-semibold">
            Lorem ipsum dolor sit amet consectetu magnam optio tempora ratione
            deleniti.
          </p>
          <div className="flex gap-x-3 text-emerald-600">
            {/* <span className="w-10 h-10 rounded-full flex justify-center items-center">
              <GitHubIcon />
            </span> */}
            <GitHubIcon />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="border-2 w-2/3 h-full">u</div>
      </div>
    </footer>
  );
};

export default Footer;
