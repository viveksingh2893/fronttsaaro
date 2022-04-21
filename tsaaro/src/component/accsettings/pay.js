import React, {useState} from "react";
import '../../assets/css/accsettings.css';
import SvgIcon from "../../assets/Icon_apps";
import {Select} from 'antd';
import AccSetPayUpdatePop from "../popup/accSetPayUpdatePop";

const { Option } = Select;

const Pay=()=>{
    const [update, setUpdate]=useState(false);
    const [message,setMessage]=useState('Your tax details are updated successfully!');
    const [title,setTitle]=useState('Success');
    const [country, setCountry]= useState(["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)",
                                            "Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
                                            "Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
                                            "Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda",
                                            "Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of",
                                            "Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"
                                            ]);
    const [children, setChildren] = useState([]);

    const handletoggle = (e) => {
        console.log("toggle..........");
        window.addEventListener('click',()=>{
        }) 
        setUpdate(!update); 
      };
    
    for (let i = 0; i < country.length; i++) {
      children.push(<Option className='lang-list' key={i}>{country[i]}</Option>);
    }

    const handleChange=(value)=> {
      console.log(`selected ${value}`);
    }

    return(
        <div className="as-website">
            <div className='as' style={{display:"flex",paddingLeft:'1.2vw',color:'#6F6F6F',flexDirection:'column', justifyContent:'center',fontSize:'1vw', alignItems:'flex-start'}}>
                <p style={{color:'#373737'}}>Click the link below to manage your payment method</p>
                <button style={{width:'15vw'}} className="as-primary-btn">
                    <p className="as-delete-acc">Stripe Customer Portal</p>
                </button>
                <p style={{fontSize:'1.2vw', marginTop:'5vh'}}>Tax Details</p>
                
                <div className="input-box" style={{margin:0}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <p className="input-label">Country</p>
                            <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                        </div>
                        <div className="input">
                            <Select
                                allowClear
                                style={{ width: '25vw' }}
                                placeholder="Please select"
                                defaultValue={['India']}
                                onChange={handleChange}
                                className='ant-select-selection-selected-value'
                                >
                                {children}
                            </Select>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="submitpop" style={{width:'76vw'}}>
                  <button onClick={handletoggle} className="as-web-submit">Update</button>
            </div>
            {update && (<AccSetPayUpdatePop title={title} message={message} closeUpdate={setUpdate}/>)}
        </div>
    )
}

export default Pay;