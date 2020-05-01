import { addDecorator, addParameters } from '@storybook/react';
// import { withDocs } from '@storybook/addon-docs';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

require('@design-systems/storybook/.storybook/defaultConfig');

// addDecorator(withDocs);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    // page: null,
    // disable: true,
    // inlineStories: false,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    }
  }
});
