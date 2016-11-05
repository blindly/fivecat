
###
# Compass
###


# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
   activate :livereload
end

# Adding meta-tags
# activate :meta_tags

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # We need this for Netlify, but the after_build stuff may be deprecated when upgrading to Middleman v4
  after_build do |builder|
    # Netlify requires a _redirects file for its redirects, but Middleman ignores files which
    # start with an underscore! So we have to hack it a little.
    src = File.join(config[:source],"_redirects")
    dst = File.join(config[:build_dir],"_redirects")
    builder.source_paths << File.dirname(__FILE__)
    builder.copy_file(src,dst)

  # Sitemap
  #activate :sitemap

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end