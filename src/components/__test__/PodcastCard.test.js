import { screen, render, fireEvent, findByRole } from 'solid-testing-library';
import PodcastCard from '../PodcastCard';
import PODCAST from './mocks/podcast-mock.json'

describe('<PodcastCard />', () => {
    // test('dummy test', () => {
    //     console.log('test ran')
    // })
    it('renders correctly', async () => {
        await render(() => <PodcastCard podcast={PODCAST} /> );
        const card = await screen.findByText(PODCAST.title);
        expect(card).toBeInTheDocument()

    })
})