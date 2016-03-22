# The DocPad Configuration File
# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://betabulls.com"

			# Here are some old site urls that you would like to redirect from
			oldUrls: ['']

			# The default title of our website
			title: "Lean MVP development & Co-founder services for Start-ups."

			# The website description (for SEO)
			description: """
				Lean MVP development & Co-founder services for Start-ups.				
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				Lean MVP development services, Co-founder services, Start-ups, BetaBulls, Beta Bulls, MVP, Lean UX, Lean Startup, Lean MVP
				"""

			# The website author's name
			author: "BetaBulls"

			# The website author's email
			email: "mike@mdm.cc"

			# Styles
			styles: [
				"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css"
				"/css/pure-min.css"
				"/css/font-awesome.min.css"
				"/css/style.css"
			]

			# Scripts
			scripts: [
				"https://cdnjs.cloudflare.com/ajax/libs/yui/3.18.0/yui/yui-min.js"
				"/js/aui-min.js"
				"/js/script.js"
			]


		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')


	# =================================
	# Collections
	# These are special collections that our website makes available to us

	collections:
		# Pages & Posts, default DocPad collections
		pages: (database) ->
			database.findAllLive({pageOrder: $exists: true}, [pageOrder:1,title:1])
			
		entPages: (database) ->
			database.findAllLive({entPageOrder: $exists: true}, [pageOrder:1,title:1])

		posts: (database) ->
			database.findAllLive({tags:$has:'post'}, [postDate:-1, date:-1])
			
		articles: (database) ->
			database.findAllLive({tags:$has:'article'}, [article:1, title:1])
			
		events: (database) ->
			database.findAllLive({tags:$has:'event'}, [event:1, title:1])
			
		resources: (database) ->
			database.findAllLive({tags:$has:'resource'}, [resource:1, title:1])


	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()

	# =================================
	# Plugin Configuration

	# Skip Unsupported Plugins
	# Set to `false` to load all plugins whether or not they are compatible with our DocPad version or not
	skipUnsupportedPlugins: false  # default: true

	plugins:
		ghpages:
			deployRemote: 'origin'
			deployBranch: 'gh-pages'

		sitemap:
			cachetime: 600000
			changefreq: 'weekly'
			hostname: 'http://betabulls.com'
			
}


# Export our DocPad Configuration
module.exports = docpadConfig