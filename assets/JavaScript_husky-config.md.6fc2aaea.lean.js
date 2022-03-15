import{_ as n,c as t,o as i,b as e,d as a}from"./app.2f175e61.js";const u='{"title":"add change id","description":"","frontmatter":{},"headers":[{"level":3,"title":"add change id","slug":"add-change-id"}],"relativePath":"JavaScript/husky-config.md","lastUpdated":1646059216000}',s={},o=e("h3",{id:"add-change-id",tabindex:"-1"},[a("add change id "),e("a",{class:"header-anchor",href:"#add-change-id","aria-hidden":"true"},"#")],-1),d=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`
# generate gerrit changeId here, since husky overwrite .git/hooks/commit-msg
if test "$#" != 1 ; then
  echo "$0 requires an argument."
  exit 1
fi

if test ! -f "$1" ; then
  echo "file does not exist: $1"
  exit 1
fi

# Do not create a change id if requested
if test "false" = "\`git config --bool --get gerrit.createChangeId\`" ; then
  exit 0
fi

# $RANDOM will be undefined if not using bash, so don't use set -u
random=$( (whoami ; hostname ; date; cat $1 ; echo $RANDOM) | git hash-object --stdin)
dest="$1.tmp.\${random}"

trap 'rm -f "\${dest}"' EXIT

if ! git stripspace --strip-comments < "$1" > "\${dest}" ; then
   echo "cannot strip comments from $1"
   exit 1
fi

if test ! -s "\${dest}" ; then
  echo "file is empty: $1"
  exit 1
fi

# Avoid the --in-place option which only appeared in Git 2.8
# Avoid the --if-exists option which only appeared in Git 2.15
if ! git -c trailer.ifexists=doNothing interpret-trailers \\
      --trailer "Change-Id: I\${random}" < "$1" > "\${dest}" ; then
  echo "cannot insert change-id line in $1"
  exit 1
fi

if ! mv "\${dest}" "$1" ; then
  echo "cannot mv \${dest} to $1"
  exit 1
fi

`)])],-1),r=[o,d];function c(h,f,l,g,p,$){return i(),t("div",null,r)}var _=n(s,[["render",c]]);export{u as __pageData,_ as default};
