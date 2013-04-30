multi-img
=========


jQuery plugin that allows you to serve different images based on viewport sizes. The plugin will set the img src to one of 3 different images based on viewport.

Examples:
=========

Here is a very simple setup:

$(selector).multiImage();

Your html must be setup like the following:

	<div class="di" 
		data-image="{URL To Desktop image}" 
		data-image-medium="{URL To medium sized image}" 
		data-image-small="{URL To small image}"
		data-alt="{alt for the img}">
		<!-- no js fallback -->
		<noscript>
			<img src="{URL to default (desktop) image}" alt="{alt for the img}" />
		</noscript>
	</div>

Options:
=========

You can pass custom viewport sizes for small (handheld), medium (tabletish), or desktop (default):

$(selector).multiImage({ "small" : "767", "medium" : "1023" });

If you do not pass any options the defaults are: small = 767, medium = 1023.