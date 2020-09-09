import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './ProfileCard.css';

const teamMembers = [
  {
    name: 'Yoshinari Fujinuma',
    description: "I'm a fifth-year computer science Ph.D. candidate at the University of Colorado, Boulder. My current research topic is on cross-lingual NLP i.e., making NLP models language-agnostic.",
    image: 'yoshinari_fujinuma.jpg',
  },
  {
    name: 'Connor Cook',
    description: "Connor is a Master's student at CU Boulder. He spent some time in the AML Lab at Brigham Young University as an undergraduate (see https://github.com/byu-aml-lab), and his first year at CU Boulder as a research assistant in the D'Mello Lab (see https://www.colorado.edu/ics/research/dmello-lab). He has experience in a couple different areas of natural language processing, but dialog systems (also known as chatbots) have become his most recent area of interest.",
    image: 'connor_cook.jpg',
  },
  {
    name: 'Rajat Bhatnagar',
    description: "I'm a second year MS in Computer Science student. My research interests are in Natural Language Processing",
    image: 'rajat_bhatnagar.jpg',
  },
  {
    name: 'Abteen Ebrahimi',
    description: "I'm a first year computer science PhD student at CU Boulder. I previously graduated from UC Santa Cruz where I worked on Dialogue Systems, and I am currently interested in using large pretrained models with low-resource languages.",
    image: 'rajat_bhatnagar.jpg',
  },
  {
    name: 'Ananya Ganesh',
    description: 'I am a first year PhD student advised by Profs. Katharina Kann and Martha Palmer. I am interested in NLP and machine learning, and I’m currently working on dialog systems applied to classroom settings. Previously, I was a research engineer in the NLP & Speech Research group at Educational Testing Service (ETS), working on automated scoring. I earned an MS in CS from UMass Amherst in May 2019, where I was a part of the Information Extraction and Synthesis Lab.',
    image: 'ananya_ganesh.jpg',
  },
];

const ProfileCard = () => (
  <Card.Group>
    {teamMembers.map((item) => (
      <Card key={item.name}>
        <Image src={`/images/team/${item.image}`} ui={false} className="profile-image" />
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="linkedin" />
          <Icon name="github" />
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default ProfileCard;
