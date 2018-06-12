/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        /* A tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty:
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty:
         */
		 it('URLs are defined', function(){
			allFeeds.forEach(function(feed){
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		 });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('names are defined', function(){
			allFeeds.forEach(function(feed){
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
	});

    describe('The menu', function(){
	const $body = $('body');

        /* A test that ensures the menu element is
         * hidden by default:
		*/
		it('is hidden by default', function(){
			expect($body.hasClass('menu-hidden')).toBe(true);
		});

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked:
          */
		it('displays and hides when clicked', function(){
			$('.menu-icon-link').click();
			expect($body.hasClass('menu-hidden')).not.toBe(true);
			$('.menu-icon-link').click();
			expect($body.hasClass('menu-hidden')).toBe(true);
		});
	});

    describe('Initial Entres', function(){
		
		beforeEach(function(done) {
			loadFeed(0, done);
		});
        
		/* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
		it('are exist', function(){
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});
	});

    describe('New Feed Selection', function(){

		beforeEach(function(done) {
			loadFeed(1, done);
		});

		/* Get a new feed content: */
		const newFeed = $('.entry').html;

		/* Get a previous feed content: */
 		function previousFeed(){
			loadFeed(0);
			return $('.entry').html;
		};
		
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
		 it('has new content', function(){
			 expect(newFeed).not.toEqual(previousFeed);
		 });
	});
}());
