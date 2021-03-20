import Layout from "../components/Layout";
import teams from "../data/team.json";

const About = () => {
  return (
    <Layout title="About | Machine Data Hub">
      <div className="page__about">
        <h1>About Machine Data Hub</h1>
        <div className="body">
          <p>
            Welcome to the Machine Data Hub! The goal of this open source
            website is to provide meaningful and useful datasets for machine
            learning applications in prognostics health management. The datasets
            have been compiled from various companies and institutions such as
            NASA, University of California Irvine, and University of Wisconsin.
          </p>
          <a href="https://github.com/PHM-Data-Hub" className="gitURL">You can view our code here!</a>
          <p>
            If you are interested in using our Python package, you can install
            it the PyPI package in the near future using ‘pip install
            machine-data-hub’! It will allow you to view available datasets, see
            information about a specific dataset, download a dataset, and even
            suggest a dataset to download.
          </p>
        </div>
        <h1>Meet Our Teams</h1>
        <div className="body">
          <ul className="team__list">
            {
              // map trough teams.json file and return the list
              teams?.map((item, index) => (
                <li key={index}>
                  <div className="team__image">
                    {/* if image exists, return img tag. if doesn't exist, return empty div */}
                    {item.profile_pict ? (
                      <img src={item.profile_pict} alt="Profile" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="team__details">
                    <div className="team__name">{item.name}</div>
                    <div className="team__summary">{item.summary}</div>
                    <a
                      className="profile_text"
                      href={`https://${item.linkedin_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkedin_url}
                    </a>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
