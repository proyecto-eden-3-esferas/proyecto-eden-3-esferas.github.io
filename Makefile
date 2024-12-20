# Now the simplest series of steps I follow is:
# 1. I clone a directory: git clone xyz://remote-repository/ my-local-repository
# 2. I add some files (git add <file>) and finally I commit (git commit -m "MESSAGE")
# 3. I also need to define a remote alias:
#    git remote add github-pages https://github.com/proyecto-eden-3-esferas/proyecto-eden-3-esferas.github.io
# 4. Then I am ready to upload (see 'upload' goal)

REMOTE = https://github.com/proyecto-eden-3-esferas/proyecto-eden-3-esferas.github.io

LOCAL  = github-pages

IMG_DIR = pictures

RESOLVE = xmllint --xinclude

SVG_DIR = ~/former/home/francisco/Documents/mis_escritos/precious/psimple/Electric_files/SVG/
MPCURVE_CLOSED_SVG = mpcurve-closed.svg
MPCURVE_OPEN_SVG   = mpcurve-open.svg

%.res.html : %.html.inc
	$(RESOLVE) --output $@   $<

$(IMG_DIR)/%.svg:   $(SVG_DIR)%.svg
	cp $< $@
metapost.curves.html: metapost.curves.inc.html $(IMG_DIR)/mpcurve-closed.svg $(IMG_DIR)/mpcurve-open.svg
	$(RESOLVE) --output $@   $<

define_remote:
	git remote add $(LOCAL) $(REMOTE)

upload:
	git push $(LOCAL) main
