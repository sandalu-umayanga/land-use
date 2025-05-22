import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutStudy.css';

// Valid icon imports
import { FaHistory, FaBullseye, FaMap, FaSeedling } from 'react-icons/fa';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { MdTimeline } from 'react-icons/md';

const AboutStudy = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="about-study-page">
      <div className="animated-bg">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
        <div className="bg-element element-3"></div>
      </div>
      
      <div className="about-study-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-header"
        >
          <h1>About the Study</h1>
          <div className="header-underline"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="study-sections"
        >
          <motion.section variants={itemVariants} className="study-card background-section">
            <div className="card-icon">
              <FaHistory />
            </div>
            <div className="card-content">
              <h2>Background</h2>
              <p>
                Paddy cultivation is an integral part of Sri Lanka's agricultural tradition. In Pannala DSD, 
                rapid urbanization and industrialization have led to significant land use changes, challenging 
                food security and local livelihoods.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="study-card objectives-section">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <div className="card-content">
              <h2>Objectives</h2>
              <div className="objective-main">
                <h3>Main Objective</h3>
                <p>Assess the land use changes and their impacts on paddy cultivation in Pannala DSD.</p>
              </div>
              
              <div className="objective-sub">
                <h3>Sub Objectives</h3>
                <div className="timeline-objectives">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <p>Identify spatial and temporal changes in land cover (1956, 2000, 2014, 2023).</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <p>Examine changes in agricultural land use.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <p>Determine socio-economic and environmental factors influencing these changes.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <p>Predict future land use changes.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <p>Propose policy recommendations for sustainable paddy cultivation.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="study-card methodology-section">
            <div className="card-icon">
              <IoAnalyticsSharp />
            </div>
            <div className="card-content">
              <h2>Methodology</h2>
              <div className="methodology-grid">
                <div className="method-item">
                  <MdTimeline className="method-icon" />
                  <p>Satellite Imagery Analysis</p>
                </div>
                <div className="method-item">
                  <FaMap className="method-icon" />
                  <p>GIS Mapping</p>
                </div>
                <div className="method-item">
                  <FaSeedling className="method-icon" />
                  <p>Field Surveys</p>
                </div>
                <div className="method-item">
                  <IoAnalyticsSharp className="method-icon" />
                  <p>Predictive Modeling (Cellular Automata)</p>
                </div>
              </div>
              <p>
                These research methods are combined to analyze past, current, and future land use trends
                in the Pannala Divisional Secretariat Division.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="study-card significance-section">
            <div className="card-icon">
              <FaSeedling />
            </div>
            <div className="card-content">
              <h2>Significance</h2>
              <p>
                This research aligns with SDG 2 (Zero Hunger) and SDG 15 (Life on Land) by promoting 
                sustainable farming practices and responsible land management.
              </p>
              
              <div className="sdg-icons">
                <div className="sdg-icon sdg-2">
                  <span>SDG 2</span>
                  <span className="sdg-label">Zero Hunger</span>
                </div>
                <div className="sdg-icon sdg-15">
                  <span>SDG 15</span>
                  <span className="sdg-label">Life on Land</span>
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.div 
            variants={itemVariants}
            className="study-timeline"
          >
            <h2>Study Timeline</h2>
            <div className="timeline-container">
              <div className="timeline-track"></div>
              <div className="timeline-points">
                <div className="timeline-point">
                  <div className="point-circle"></div>
                  <span className="point-year">1956</span>
                  <span className="point-label">Initial Land Cover</span>
                </div>
                <div className="timeline-point">
                  <div className="point-circle"></div>
                  <span className="point-year">2000</span>
                  <span className="point-label">Millennium Assessment</span>
                </div>
                <div className="timeline-point">
                  <div className="point-circle"></div>
                  <span className="point-year">2014</span>
                  <span className="point-label">Intermediate Analysis</span>
                </div>
                <div className="timeline-point">
                  <div className="point-circle"></div>
                  <span className="point-year">2023</span>
                  <span className="point-label">Current State</span>
                </div>
                <div className="timeline-point future">
                  <div className="point-circle"></div>
                  <span className="point-year">Future</span>
                  <span className="point-label">Predictions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutStudy;
