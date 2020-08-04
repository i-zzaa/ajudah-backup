import React from 'react';

// core components
import Wizard from 'components/Wizard/Wizard.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import Step1 from './WizardSteps/Step1.js';
import Step2 from './WizardSteps/Step2.js';

export default function WizardView() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            { stepName: 'Cadastro', stepComponent: Step1, stepId: 'cadastro' },
            {
              stepName: 'Pagamento',
              stepComponent: Step2,
              stepId: 'pagamento',
            },
          ]}
          title="Build Your Profile"
          subtitle="This information will let us know more about you."
          finishButtonClick={(e) => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
