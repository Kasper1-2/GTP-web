import DriverCard from "../shared/DriverCard";
import "./DriverSection.css";

const drivers = [
  {
    name: "V. Da Silva",
    gear: [
      "Base Moza R9 V1",
      "Volante Moza CS V2P",
      "Pedales Heusinkveld Sprint",
      "Shifter Thrustmaster TH8A",
    ],
    socials: {
      instagram: "https://www.instagram.com/vincepty/",
      twitch: "https://twitch.tv/vdasilva",
    },
  },
  {
    name: "J. Brandao",
    gear: [
      "Base Clubsport v2.5",
      "Volante Podium Endurance / OMP D Suede wheel",
      "Pedales Inverted Fanatec V3",
      "Shifter Thrustmaster TH8A",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "A. Quiroz",
    gear: [
      "Base Simagic Alpha U",
      "Volante Simagic GT Neo",
      "Pedales Simagic P1000rs",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "S. Rodriguez",
    gear: [
      "Base Logitech G923",
      "Volante Logitech G923",
      "Pedales Logitech G923",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "E. Videla",
    gear: ["Base Moza R5", "Volante Moza KS / ES", "Pedales MyD Simracing"],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "A. Lopez",
    gear: [
      "Base Simucube v1",
      "Volante Simagic GT Neo",
      "Pedales Custom Tilton",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "D. Cisneros",
    gear: [
      "Base Thrustmaster t300RS",
      "Volante Custom SMR F1 replica",
      "Pedales Moza SR-P",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "E. Noriega",
    gear: [
      "Base Fanatec Podium DD2",
      "Volante Fanatec F1",
      "Pedales Fanatec V3",
      "Shifter Thrustmaster TH8A",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "J. Santamaria",
    gear: ["Base Logitech G920", "Volante Logitech G920", "Pedales Moza SRP"],
  },
  {
    name: "L. Diaz",
    gear: [
      "Base Logitech G923",
      "Volante Logitech G923",
      "Pedales Logitech G923",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
  {
    name: "D. Abrego",
    gear: [
      "Base Fanatec CSL DD 8NM",
      "Volante Fanatec V 3.5 fórmula",
      "Pedales Fanatec V3",
    ],
    socials: {
      instagram: "",
      twitch: "",
    },
  },
];

const DriversSection = () => {
  return (
    <section className="drivers-section" id="drivers">
      <h2 className="drivers-title">Drivers</h2>
      <div className="drivers-grid">
        {drivers.map((driver, idx) => (
          <DriverCard
            key={idx}
            name={driver.name}
            gear={driver.gear}
            socials={driver.socials} // ✅ pass socials here
          />
        ))}
      </div>
    </section>
  );
};

export default DriversSection;
