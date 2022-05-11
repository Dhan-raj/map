import React, { useState } from "react";
import styles from "./sidebar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CloseIcon from "@mui/icons-material/Close";
import SelectSearch, { fuzzySearch } from "react-select-search";

// const options = [
//   { name: "Swedish", value: "sv" },
//   { name: "English", value: "en" },
// ];

const options = [
  {
    _id: "624e1a838cc6784d7887d332",
    uuid: "00adfbc9-1140-4d9e-8046-4a59520612ad",
    sourceId: "DMLH16413186",
    altName: "porthuron.mi",
    location: {
      type: "Point",
      coordinates: [-82.48612686903985, 42.98925130151392],
    },
    deviceType: "HUB",
    name: "MIPH",
    model: "Secondary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "6250686d8cc6784d78a1301e",
    uuid: "00e9d581-612f-44cc-9286-4e7ccc75e37e",
    sourceId: "TCDS75586896",
    location: {
      type: "Point",
      coordinates: [-104.842987234683, 38.83398746246875],
      datePublished: "2019-11-07T00:39:52.000Z",
      owner: "TCDS75586896",
      ownerClass: "FM_IDM_EQ_HOUSING",
      sourceId: "TCDS75586897",
    },
    deviceType: "HUB",
    name: "COPB",
    model: "Secondary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "624a1b058cc6784d78718ddc",
    uuid: "01d86f02-df5a-409f-8281-dd30c9af5405",
    sourceId: "HLMF23012478",
    altName: "pinevalley.in",
    location: {
      type: "Point",
      coordinates: [-85.11823260293302, 41.163896693445814],
    },
    deviceType: "HUB",
    name: "INPV",
    model: "Secondary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "62503fab8cc6784d7805726e",
    uuid: "0223a278-5f12-4b20-811e-3b00db26babf",
    sourceId: "TCDS46687725",
    location: {
      type: "Point",
      coordinates: [-105.01543296100415, 39.5603322571858],
      datePublished: "2018-12-28T18:13:00.000Z",
      owner: "TCDS46687725",
      ownerClass: "FM_IDM_EQ_HOUSING",
      sourceId: "TCDS46687763",
    },
    deviceType: "FM_IDM_EQ_HOUSING",
    name: "COHLRNR04800",
    model: "AR.HS.TMAX4100R.20151000",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "6249d1298cc6784d78419de0",
    uuid: "035fcd3c-54e9-43f6-9712-7ded024dd745",
    sourceId: "FRKHBWAA14991795",
    altName: "GETTYSBURG",
    location: {
      type: "Point",
      coordinates: [-77.26700185068317, 39.82053960062433],
    },
    deviceType: "HUB",
    name: "PAGY",
    model: "Primary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "624794c18cc6784d78126d46",
    uuid: "0373b471-106b-4375-a1a6-f128b43a1b97",
    sourceId: "TCDS74956642",
    location: {
      type: "Point",
      coordinates: [-110.96829323482112, 32.42539287549946],
      datePublished: "2019-10-29T19:27:20.000Z",
      owner: "TCDS74956642",
      ownerClass: "FM_IDM_EQ_HOUSING",
      sourceId: "TCDS74956643",
    },
    deviceType: "HUB",
    name: "AZAB",
    model: "Secondary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
  {
    _id: "6247b54e8cc6784d78585536",
    uuid: "03aadfd0-429b-4977-93fb-9d695b36baf1",
    sourceId: "HLLPNTL46126370",
    altName: "greensburg.in",
    location: {
      type: "Point",
      coordinates: [-84.86718032391015, 39.096222385227335],
    },
    deviceType: "HUB",
    name: "INLG",
    model: "Secondary Hub",
    docState: "LIVE",
    designUuid: "LIVE",
    insideDemark: false,
  },
];

const optionData = options.map((data) => {
  let temp = {
    name: data.name,
    value: data.location,
  };
  return temp;
});

console.log(optionData);

const Sidebar = () => {
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidebar}>
        <button onClick={() => setShowSearch(true)}>
          <SearchIcon />
        </button>
        <button onClick={() => console.log("clicked")}>
          <InfoIcon />
        </button>
        <button onClick={() => console.log("clicked")}>
          <RecentActorsIcon />
        </button>
      </div>
      {showSearch && (
        <div
          style={{ display: "flex", flexDirection: "column", width: "25rem" }}
        >
          <div className={styles.closeContainer}>
            <CloseIcon
              className={styles.closeBtn}
              onClick={() => setShowSearch(false)}
            />
          </div>
          <div className={styles.searchContainer}>
            <SelectSearch
              options={optionData}
              search
              filterOptions={fuzzySearch}
              placeholder="Select your country"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
