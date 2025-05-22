import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PolicyRecomendations.css';
import { FaLeaf, FaHandshake, FaUniversity, FaBullhorn, FaUsers, FaSeedling } from 'react-icons/fa';
import { IoEarth, IoWater } from 'react-icons/io5';
import { GiWheat, GiPlantRoots } from 'react-icons/gi';
import { MdPolicy, MdAgriculture } from 'react-icons/md';


const PolicyRecommendations = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="policy-page">
      {/* Hero Section */}
      <motion.section 
        className="policy-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1>Policy Recommendations</h1>
          <p className="subtitle">Sustainable solutions for paddy land conservation and agricultural development</p>
        </div>
      </motion.section>

      {/* Current and Future Impacts Section */}
      <motion.section 
        className="impacts-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <div className="section-header">
            <GiWheat className="section-icon" />
            <h2>Current and Future Impacts on Paddy Cultivation</h2>
          </div>
          
          <div className="impacts-content">
            <motion.div 
              className="impact-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="/assets/paddy-field-decline.jpg" alt="Declining paddy fields in Pannala" />
            </motion.div>
            
            <div className="impact-text">
              <p>
                Paddy cultivation in the Pannala Divisional Secretariat Division has experienced significant challenges, as changing land use and land cover (LULC) changes. Urbanization, industrial development, and environmental degradation have led to a steady decline in paddy lands.
              </p>
              <p>
                If these trends continue unchecked, the situation is expected to worsen by 2030 and 2040, affecting food security and the livelihoods of farming communities (Gunasekara & Goonetilleke, 2020; Herath et al., 2019). These changes threaten the sustainability of local agriculture and require immediate policy interventions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Public Awareness Section */}
      <motion.section 
        className="awareness-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container">
          <div className="section-header">
            <FaBullhorn className="section-icon" />
            <h2>The Need for Public Awareness</h2>
          </div>
          
          <div className="awareness-cards">
            <motion.div 
              className="awareness-card"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaUsers className="card-icon" />
              <h3>Community Education</h3>
              <p>
                Raising public awareness about the importance of paddy cultivation and the harms posed by unplanned land use is essential. Many landowners and communities are unaware of the long-term impacts of converting paddy lands into residential or industrial zones.
              </p>
            </motion.div>
            
            <motion.div 
              className="awareness-card"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaUniversity className="card-icon" />
              <h3>Educational Programs</h3>
              <p>
                Educational campaigns through websites, workshops, social media campaigns, and school programs can foster a culture of environmental responsibility and sustainable land use practices.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Policy Recommendations Section */}
      <motion.section 
        className="recommendations-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container">
          <div className="section-header">
            <MdPolicy className="section-icon" />
            <h2>Policy Recommendations for Government and Authorities</h2>
          </div>
          
          <div className="recommendations-grid">
            <motion.div 
              className="recommendation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaLeaf className="item-icon" />
              <h3>Sustainable Agriculture Policies</h3>
              <p>
                Implement sustainable policies that provide incentives for farmers to maintain paddy lands and practice eco-friendly farming methods.
              </p>
              <ul className="recommendation-list">
                <li>Tax benefits for maintaining agricultural lands</li>
                <li>Subsidies for organic farming practices</li>
                <li>Financial support for traditional paddy varieties</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="recommendation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <IoWater className="item-icon" />
              <h3>Water Resource Management</h3>
              <p>
                Improve irrigation infrastructure and promote the maintenance of traditional tank systems for sustainable water management.
              </p>
              <ul className="recommendation-list">
                <li>Rehabilitation of ancient tank systems</li>
                <li>Modern irrigation techniques that conserve water</li>
                <li>Rainwater harvesting systems for paddy cultivation</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="recommendation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <IoEarth className="item-icon" />
              <h3>Land Use Planning</h3>
              <p>
                Strengthen regulations against the unauthorized land conversion from agriculture to other uses, particularly in fertile paddy areas.
              </p>
              <ul className="recommendation-list">
                <li>Strict enforcement of existing land use laws</li>
                <li>Buffer zones between agricultural and developed areas</li>
                <li>GIS-based monitoring of land use changes</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="recommendation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaHandshake className="item-icon" />
              <h3>Stakeholder Collaboration</h3>
              <p>
                Facilitate collaboration between stakeholders including farmers, planners, and policymakers to ensure that future agriculture in the region is sustainable.
              </p>
              <ul className="recommendation-list">
                <li>Regular stakeholder forums and workshops</li>
                <li>Participatory decision-making processes</li>
                <li>Community-led monitoring programs</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="recommendation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaSeedling className="item-icon" />
              <h3>Agricultural Innovation</h3>
              <p>
                Support research and implementation of innovative farming techniques that increase productivity while maintaining sustainability.
              </p>
              <ul className="recommendation-list">
                <li>Research partnerships with universities</li>
                <li>Climate-resilient paddy varieties</li>
                <li>Precision agriculture techniques</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Action Plan Section */}
      <motion.section 
        className="action-section"
        {...fadeIn}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container">
          <h2>Balancing Development & Agriculture</h2>
          <p className="action-intro">
            A sustainable future for Pannala requires balancing essential development with the preservation of agricultural heritage. The following strategies provide a framework for achieving this balance:
          </p>
          
          <div className="action-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>1</span>
              </div>
              <div className="timeline-content">
                <h3>Immediate Actions (1-2 years)</h3>
                <p>Strengthen enforcement of existing land use regulations and begin public awareness campaigns.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>2</span>
              </div>
              <div className="timeline-content">
                <h3>Medium-Term Goals (3-5 years)</h3>
                <p>Implement zoning plans that protect prime agricultural lands while allowing controlled development in designated areas.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <span>3</span>
              </div>
              <div className="timeline-content">
                <h3>Long-Term Vision (5-10 years)</h3>
                <p>Establish a sustainable agricultural economy that harmoniously coexists with necessary urban and industrial development.</p>
              </div>
            </div>
          </div>
          
          <div className="call-to-action">
            <h3>Join the Effort</h3>
            <p>These policy recommendations require collaborative action from government agencies, local communities, and individual citizens.</p>
            <button className="action-button">Download Complete Policy Brief</button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PolicyRecommendations;