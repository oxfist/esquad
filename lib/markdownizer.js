import TurndownService from 'turndown';

const markdownizer = {
  async markdownize(element) {
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(element);
    return markdown;
  },
};

export default markdownizer;
