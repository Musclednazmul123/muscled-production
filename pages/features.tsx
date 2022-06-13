import styled from 'styled-components';
import AutofitGrid from 'Styles/GlobalStyles/AutofitGrid';
import BasicCard from 'components/Cards/BasicCard';
import Page from 'components/Page';
import YoutubeVideo from 'components/YoutubeVideo';
import SectionTitle from 'Styles/SectionTitle';
import { Wrapper, CustomAutofitGrid } from 'Styles/features.style';
import { FEATURES } from 'Data/featuresData';

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}
